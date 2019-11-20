$('.announcement-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  prevArrow: $('.prev-arrow-announcement'),
  nextArrow: $('.next-arrow-announcement')
});

$(document).ready(function () {
  var pageURL = $(location).attr("href");
  console.log(pageURL);
  if (pageURL == "http://localhost:3000/") {
    console.log("home");
    $.get("/announcements", function (announcements) {
      insertAnnouncements(announcements, true);
    });
  }
  else if (pageURL == "http://localhost:3000/html/teacheraddlink.html") {
    console.log("in else if");
    loadClassAnnouncements();
  }
  else {
    console.log("in else");
    $.ajax({
      url: "/classAnnouncements",
      dataType: "json",
      headers: { 'X-Alt-Referer': document.referrer },
      success: function (announcements) {
        console.log(announcements);
        insertAnnouncements(announcements, false);
      }
    });
  }
});

const insertAnnouncements = function (announcements, isHome) {
  let announcementHTML = '';
  let liHTML = '';
  $('#starterDiv').html("");
  announcements.forEach(function (announcement, i) {
    /*(console.log('announcement ');
    console.log(announcement);
    console.log(i);*/
    liHTML += newLI(announcement);

    $('#outerDiv').html($('#outerDiv').html() + newUL(liHTML));
    liHTML = "";
  });
}

const insertAnnouncements2 = function (announcements, num, isHome) {
  let announcementHTML = '';
  let liHTML = '';
  let starterDiv = document.getElementsByClassName("starterDiv")[num];
  $(starterDiv).html("");
  let outerDiv = document.getElementsByClassName("outerDiv")[num];
  announcements.forEach(function (announcement, i) {
    /*(console.log('announcement ');
    console.log(announcement);
    console.log(i);*/
    liHTML += newLI(announcement);
    $(outerDiv).html($(outerDiv).html() + newUL(liHTML));
    liHTML = "";
  });
}


const newUL = function (liHTML) {
  let innerDiv = '<div><ul class="nolist list-unstyled position-relative mb-0 px-lg-5 pt-lg-5">' + liHTML +
    '</ul></div>'
  return innerDiv;
};

const newLI = function (announcement) {
  return '<li class="border-bottom pb-3 mt-3">' +
    '<span class="meta text-uppercase">January 18th, 2018</span>' +
    '<h3 class="font-weight-bold mt-0">' +
    announcement["title"] +
    '</h3>' +
    '<p class=' + announcement.announcement + '</p>' +
    '</li>';
};


/*loads announcements for all classes in the teacher portal*/
const loadClassAnnouncements = function () {
  console.log("in load class");
  let courses = document.getElementsByClassName("announcementClass");
  console.log(courses);
  $(courses).each(function (i) {
    $.ajax({
      url: "/classAnnouncements/" + courses[i].innerHTML,
      dataType: "json",
      headers: { 'X-Alt-Referer': document.referrer },
      success: function (announcements) {
        console.log("in success");
        console.log(announcements);
        insertAnnouncements2(announcements, i, false);
      }
    });
  });
};
