const app = require('express')();
const http = require('http').Server(app);
const fs = require('fs');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); //need to parse HTTP request body

app.set('view engine', 'pug')

http.listen(3000, function () {
  console.log('listening on *:3000');
});

/** Serving pages */
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/aboutpage.html');

});

const announcementData = require('./JSON/announcements.json')
app.get('/announcements', function (req, res) {
  console.log(announcementData);
  res.send(announcementData);
});

app.get('/html/*', function (req, res) {
  // serving all regular pages
  res.sendFile(__dirname + req.url);
})

/** Serving CSS */
app.get('/css/*', function (req, res) {
  res.sendFile(__dirname + req.url);
})

/** Serving JS */
app.get('/JS_Libraries/*', function (req, res) {
  res.sendFile(__dirname + req.url);
})

/** Serving JS */
app.get('/classAnnouncements*', function (req, res) {
  const urlParam = null;
  if (req.path == "/classAnnouncements"){
    console.log("req.header('Referer')  " + req.header('Referer'));
    let url = new URL(req.header('Referer'));
    
    console.log(url);
    urlParams = new URLSearchParams(url.search);
  }
  else{
    let edited = req.path.replace("/classAnnouncements/", "");
    edited = edited.replace("&amp;", "&");
    edited = edited.replace("&amp;", "&");
    let url = new URL("http://localhost:3000/list/?"+ edited);
    
    console.log(url);
    urlParams = new URLSearchParams(url.search);
  }
  let grade = urlParams.get("grade");
  console.log("grade " + grade);
  let course = urlParams.get('subject');
  console.log("course " + course);
  fs.readFile("JSON/classAnnouncements.json", (err, data) => {
    if (err) {
      console.error("ERROR ACCESSING FILES (JSON/classAnnouncements.json):" + err)
      res.send("ERROR ACCESSING FILES (JSON/classAnnouncements.json):" + err);
      return;
    }

    switch (grade) {
      case 'Grade_1':
        grade = "First";
        break;
      case 'Grade_2':
        grade = "Second";
        break;
      case 'Grade_3':
        grade = "Third";
        break;
      case 'Grade_4':
        grade = "Fourth";
        break;
      case 'Grade_5':
        grade = "Fifth";
        break;
      case 'Grade_6':
        grade = "Sixth";
        break;
    }
    let finalAnnouncements = [];
    let siteList = JSON.parse(data);
    console.log(siteList);
    let json = null;
    Object.keys(siteList).forEach((key) => {
      if (key == grade) {
        json = siteList[key]["subjects"];
        for (subject in json) {
          if (course == subject) {
            json = json[course];
            for (announcement in json) {
              finalAnnouncements.push({
                title: json[announcement].title,
                announcement: json[announcement].announcement
              });
            }
            console.log("about to send");
            res.send(finalAnnouncements);
          }
        }
      }
    })
  })
})



/** Serving Display page */
app.get('/list/*', function (req, res) {
  // Serving download display page
  fs.readFile("JSON/files.json", (err, data) => {
    if (err) {
      console.error("ERROR ACCESSING FILES (JSON/files.json):" + err)
      res.send("ERROR ACCESSING FILES (JSON/files.json):" + err);
      return;
    }

    let grade = req.query.grade.substring(6);

    switch (grade) {
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
      if ((siteList[key].grades).includes(req.query.grade)) {
        if (siteList[key].subjects.includes("math")) {
          math.push({
            link: key,
            description: siteList[key].description,
            dueDate: siteList[key].dueDate
          });
        }
        else if (siteList[key].subjects.includes("reading")) {
          reading.push({
            link: key,
            description: siteList[key].description,
            dueDate: siteList[key].dueDate
          });
        }
        else if (siteList[key].subjects.includes("science")) {
          science.push({
            link: key,
            description: siteList[key].description,
            dueDate: siteList[key].dueDate
          });
        }
      }
    })

    if (req.query.subject === 'math') {
      res.render('displayPage', {
        title: grade + " Grade Links",
        subject: "Math",
        links: math
      })
    }
    else if (req.query.subject === 'science') {
      res.render('displayPage', {
        title: grade + " Grade Links",
        subject: "Science",
        links: science
      })
    }
    else if (req.query.subject === 'reading') {
      res.render('displayPage', {
        title: grade + " Grade Links",
        subject: "Reading",
        links: reading
      })
    }
  })
})

/** Serving downloaded sites */
app.get('/SITES/*', function (req, res) {
  let parsed = req.url.replace(/%20/g, ' ');

  let index = parsed.indexOf('?');
  let url = (index === -1) ? parsed : parsed.substring(0, parsed.indexOf('?'));

  console.log("SERVING: ", parsed);
  res.sendFile(__dirname + url);
})

