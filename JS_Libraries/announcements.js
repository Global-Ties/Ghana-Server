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
  let announcementCounter = 0;
  let liHTML = '';
  $('#starterDiv').html("");
  announcements.forEach(function (announcement, i) {
    /*(console.log('announcement ');
    console.log(announcement);
    console.log(i);*/
    liHTML += newLI(announcement);

    $('#outerDiv').html($('#outerDiv').html() + newUL(liHTML, announcementCounter))
    announcementCounter++;
    liHTML = "";
  });
}

const insertAnnouncements2 = function (announcements, num, announcementCounter, isHome) {
  let liHTML = '';
  let starterDiv = document.getElementsByClassName("starterDiv")[num];
  $(starterDiv).html("");
  let outerDiv = document.getElementsByClassName("outerDiv")[num];
  announcements.forEach(function (announcement, i) {
    /*(console.log('announcement ');
    console.log(announcement);
    console.log(i);*/
    liHTML += newLI(announcement);
    $(outerDiv).html($(outerDiv).html() + newUL(liHTML, announcementCounter));
    announcementCounter++;
    liHTML = "";
  });
  return announcementCounter;
}


const newUL = function (liHTML, counter) {
  let innerDiv = '';
  if ($(location).attr("href") == "http://localhost:3000/html/teacheraddlink.html"){
    innerDiv = '<div class="divAnnouncement" id="announcement'+counter+'"><ul class="nolist list-unstyled position-relative mb-0 px-lg-5 pt-lg-5">' + liHTML +
    '</ul><button class="delButton" onclick="delClassAnnouncements(this)" id="button'+counter+'">-</button></div>';
  }
  else{
    innerDiv = '<div class="divAnnouncement" id="announcement'+counter+'"><ul class="nolist list-unstyled position-relative mb-0 px-lg-5 pt-lg-5">' + liHTML +
    '</ul></div>';
  }
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
  let announcementCounter = 0;
  let courses = document.getElementsByClassName("announcementClass");
  console.log(courses);
  $(courses).each(function (i) {
    $.ajax({
      url: "/classAnnouncements/" + courses[i].innerHTML,
      dataType: "json",
      headers: { 'X-Alt-Referer': document.referrer },
      success: function (announcements) {
        announcementCounter = insertAnnouncements2(announcements, i, announcementCounter, false);
      }
    });/*
    announcementCounter++;*/
  });
};

const delClassAnnouncements = function (buttonObj) {
  console.log($($(buttonObj).attr('id')));
  $.ajax({
    url: "/delclassAnnouncements/" + courses[i].innerHTML,
    dataType: "json",
    headers: { 'X-Alt-Referer': document.referrer },
    success: function (announcements) {
      buttonObj.parentNode.parentNode.removeChild(buttonObj.parentNode);
    }
  });
}