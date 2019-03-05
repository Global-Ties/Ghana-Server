const app = require('express')();
const http = require('http').Server(app);

const fs = require('fs');
const bodyParser = require('body-parser');
const urlExists = require('url-exists');

const download = require('./download');

app.set('view engine', 'pug')

app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({ extended: true })); 

http.listen(3000, function(){
  console.log('listening on *:3000');
});

/** Serving pages */
app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/downloadPage.html');
});

app.get('/gradepage', function(req, res) {
  res.sendFile(__dirname + '/html/gradepage.html');
})

/** Serving CSS */
app.get('/css/*', function(req, res) {
  res.sendFile(__dirname + req.url);
})

/** Serving JS */
app.get('/axios', function(req, res) {
  res.sendFile(__dirname + "/JS_Libraries/axios.js");
})

/** Serving downloaded sites */
app.get('/list/*', function(req, res) {
  fs.readFile("JSON/files.json", (err, data) => {
    if ( err ) {
      console.error("ERROR ACCESSING FILES (JSON/files.json):"+ err)
      res.send("ERROR ACCESSING FILES (JSON/files.json):"+ err);
      return;
    }

    let grade = req.query.grade.substring(6);

    switch(grade) {
      case '1':
        grade = "First";
        break;
      case '2':
        grade = "Second";
        break;
      case '3':
        grade = "Third";
        break;
      case '4':
        grade = "Fourth";
        break;
      case '5':
        grade = "Fifth";
        break;
      case '6':
        grade = "Sixth";
        break;
    }

    let math = [];
    let reading = [];
    let science = [];

    let siteList = JSON.parse(data);

    Object.keys(siteList).forEach((key) => {
      if ( (siteList[key].grades).includes(req.query.grade) ) {
        if ( siteList[key].subjects.includes("math") ) {
          math.push(key);
        }
        else if ( siteList[key].subjects.includes("reading") ) {
          reading.push(key);
        }
        else if ( siteList[key].subjects.includes("science") ) {
          science.push(key);
        }
      }
    })

    res.render('displayPage', { 
      title: grade + " Grade Links",
      math: math,
      reading: reading,
      science: science
    })
  })
})

app.get('/SITES/*', function(req, res) {
  res.sendFile(__dirname + req.url.replace( /%20/g, ' '));
})


//------------------------------- HANDLES QUERIES ----------------------------//

/** 
 * HANDLES DOWNLOAD REQUESTS 
 * NEEDS TO BE SECURED BY USERNAME/PASSWORD TO PREVENT STUDENTS FROM ACCESSING
 */
app.post('/api/download', function(req, res) {
  //res.setHeader("Access-Control-Allow-Origin", "*");

  urlExists(req.body[Object.keys(req.body)[0]].url, (err, exists) => {

    var cont = true;
    if ( exists ) {
      fs.readFile("JSON/files.json", (error, files) => {
        if ( error ) {
          res.send("ERROR READING DOWNLAODED FILES (JSON/files.json):" + error)
          cont = false;
          return;
        }

        Object.keys(JSON.parse(files)).forEach((key) => {
          if ( key === Object.keys(req.body)[0]) {
            res.send("INVALID NAME - ALREADY IN USE");
            console.error("INVALID NAME - ALREADY IN USE");
            cont = false;
            return;
          }
        })

        fs.readFile("JSON/downloadQueue.json", (err, data) => {
          if ( err ) {
            res.send("ERROR ACCESSING DOWNLOAD QUEUE (JSON/downloadQueue.json):"+ err);
            cont = false;
            return;
          }

          Object.keys(JSON.parse(data)).forEach((key) => {
            if ( key === Object.keys(req.body)[0]) {
              res.send("INVALID NAME - NAME IS ALREADY IN QUEUE");
              console.error("INVALID NAME - NAME IS ALREADY IN QUEUE");
              cont = false;
              return;
            }
          })

          if ( cont ) {
            fs.writeFileSync("JSON/downloadQueue.json", 
                          JSON.stringify(Object.assign(JSON.parse(data), req.body),
                          null, 4)
                        );
          }
        });
      })
    }
    else {
      console.error('invalid url', err);
      res.send("invalid url");
    }
  })
})

/**
 * Manages current download
 */
var available = {
  avail: true,
  name: '',
};
setInterval(() => {
  if ( available.avail ) {
    fs.readFile("JSON/downloadQueue.json", (err, data) => {
      if ( err ) {
        console.error("ERROR ACCESSING DOWNLOAD QUEUE (JSON/downloadQueue.json):", err)
        return;
      }

      let queue = JSON.parse(data);
      if ( Object.keys(queue).length !== 0 ) {
        const key = Object.keys(queue)[0];
        const val = queue[key];

        // Determine download type
        if ( queue[key].url.indexOf("youtube") === -1 ) {
          download.httrack(val, updateAvailable);
        }
        else {
          download.youtube(val, updateAvailable);
        }
        delete queue[key];
        
        fs.writeFileSync("JSON/downloadQueue.json", JSON.stringify(queue,null, 4));

        available = {
          avail: false,
          name: val.name
        };
      }
    })
  }
  else {
    console.log("Download in progress:", available.name);
  }
}, 5000);

const updateAvailable = () => {
  console.log("Download Complete:", available.name);
  available = {
    avail: true,
    name: ''
  };
}