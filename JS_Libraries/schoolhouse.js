$(document).ready(function () {
  console.log("document loaded");
});

$(document).ready(function () {
  let pgTitle = document.title;
  var navHeader = document.getElementById("navHeader");
  console.log(navHeader.innerHTML);
  let headerHTML = '<!-- Navbar -->\n' +
    '<div class="w3-top">\n' +
    '<div class="w3-bar w3-orange w3-card w3-left-align w3-large">\n' +
    '<a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-blue"\n' +
    'href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>\n' +
    '<a href="/" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-red w3-red">Home</a>\n' +
    '<a href="/html/gradepage.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-teal">Student Portal</a>\n' +
    '<a href="/html/teacheraddlink.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-light-green">Teacher Portal</a>\n' +
    '<a href="/html/games.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-amber">Games</a>\n' +
    '<a href="/html/faq.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-indigo">Instructions</a>\n' +
    '<a href="https://132.239.135.137/mail" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-deep-purple">Email</div>\n' +
    '<!-- Navbar on small screens -->\n' +
    '<div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">\n' +
    '<a href="aboutpage.html" class="w3-bar-item w3-button w3-padding-large">About Us</a>\n' +
    '<a href="gradepage.html" class="w3-bar-item w3-button w3-padding-large">Student Portal</a>\n' +
    '<a href="teacheraddlink.html" class="w3-bar-item w3-button w3-padding-large">Teacher Portal</a>\n' +
    '<a href="contactpage.html" class="w3-bar-item w3-button w3-padding-large">Contact Us</a>\n' +
    '</div>\n' +
    '</div>\n';
  if (pgTitle === "Home") {
    headerHTML += '<!-- Header -->\n' +
      '<header class="w3-container w3-white w3-center" style="padding:60px 10px; background: linear-gradient(rgb(66, 37, 37), rgb(216, 187, 157), rgb(233, 224, 216), white, white, white, white)">\n' +
      '<div style="width: 100%; display: table;">\n' +
      '<p> </p>\n' +
      '<div style="display: table-row">\n' +
      '<div style="width: 100px; display: table-cell;">\n' +
      '</div>\n' +
      '<div style="width: 400px; display: table-cell; padding-top: 15px">\n' +
      '<img src="../css/images/Semanhyiya.png" style="padding-top:5px" width="300" height="300" alt="School Logo">\n' +
      '</div>\n' +
      '<div style="display: table-cell;">\n' +
      '<h1 class="w3-margin w3-jumbo w3-left-align">Semanhyiya American School</h1>\n' +
      '</div>\n' +
      '</div>\n' +
      '</div>\n' +
      '</header>\n';
  }
  else {
    headerHTML += '<!-- Header -->' +
      '<header class="w3-container w3-deep-purple w3-center"' +
      'style="padding:55px 16px; background: linear-gradient( #321761, #4e2692, #6e40be , #895ada)">' +
      '<p style="padding-top: 10px"> </p>' +
      '<h1 class="w3-margin w3-jumbo">' + pgTitle + '</h1>' +
      '</header>';
  }
  headerHTML += '<!-- Divider -->\n' +
    '<div style="padding:10px" class="w3-row-padding w3-container w3-orange">\n' +
    '<div class="w3-content">\n' +
    '<div class="w3-twothird">\n' +
    '</div>\n' +
    '</div>\n' +
    '</div>\n' +
    '<!-- Divider -->\n' +
    '<div style="padding:5px" class="w3-row-padding w3-container ">\n' +
    '<div class=" w3-content">\n' +
    '<div class="w3-twothird">\n' +
    '</div>\n' +
    '</div>\n' +
    '</div>\n' +
    '<!-- Divider -->\n' +
    '<div style="padding:10px" class="w3-row-padding w3-container w3-orange">\n' +
    '<div class="w3-content">\n' +
    '<div class="w3-twothird">\n' +
    '</div>\n' +
    '</div>\n' +
    '</div>\n';
  navHeader.innerHTML = headerHTML;




  var footer = document.createElement("footer");
  footer.innerHTML = '<footer style="padding:1px 1px; background: rgb(31, 31, 37)" class="w3-container w3-center">\n<div class="w3-large">\n<p style="color: white">Copyright © 2019, The GodFreds Foundation</p>\n</div>'
  document.body.appendChild(footer);

});