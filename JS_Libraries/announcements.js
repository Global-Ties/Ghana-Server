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
  $.get("/announcements", function (announcements) {
    let announcementHTML = '';
    let liHTML = '';
    $('#starterDiv').html("");
    announcements.forEach(function(announcement, i){
      console.log('announcement ' +announcement);
      console.log(i);
      liHTML += newLI(announcement);
      if (i % 3 == 2){
        console.log("going to newul " + i);
        $('#outerDiv').html($('#outerDiv').html() + newUL(liHTML));
        liHTML = "";
      }
    });
  });
});


const newUL = function(liHTML){
  let innerDiv = '<div><ul class="nolist list-unstyled position-relative mb-0 px-lg-5 pt-lg-5">'+ liHTML+
  '</ul></div>'
  return innerDiv;
};

const newLI = function(announcement) {
  return '<li class="border-bottom pb-3 mt-3">'+
  '<span class="meta text-uppercase">January 18th, 2018</span>'+
  '<h3 class="font-weight-bold mt-0">'+
    announcement["title"]+
  '</h3>'+
  '<p class='+announcement.announcement + '</p>'+
'</li>';

};