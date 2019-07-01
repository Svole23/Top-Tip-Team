$(document).ready(function () {

  $(".cookie-button").click(function(){
    $(".cookie").removeClass("show");
  });

  $(".cookie-link").click(function(){
    $(".gdpr-container").addClass("show");
  });

  $(".gdpr-button-close").click(function(){
    $(".gdpr-container").removeClass("show");
  });

  $(".header-link-right-container").click(function(){
    $(".header-link-right-container").addClass("expand-right");
    $(".header-link-right-container .header-link").addClass("hide");
    $(".header-sign-up-container").addClass("show");
    $(".header-log-in-container").addClass("show");
  });

  $(".log-in-close").click(function(event){
    $(".header-link-right-container").removeClass("expand-right");
    $(".header-link-right-container .header-link").removeClass("hide");
    $(".header-sign-up-container").removeClass("show");
    $(".header-log-in-container").removeClass("show");
    event.stopPropagation();
  });

  $("#login-button").click(function(){
    window.location.href='user-home.html';
  });

  $("#logout-button").click(function(){
    window.location.href='index.html';
  });


  $(".sc-button").click(function(){
    $(".sc-form-container").addClass("show")
  });

  $(".sc-form-close").click(function(){
    $(".sc-form-container").removeClass("show")
  });

  $(".footer-disclaimer-link").click(function(){
    $(".disclaimer-container").addClass("show")
  });

  $(".disclaimer-button-close").click(function(){
    $(".disclaimer-container").removeClass("show")
  });

  $(".footer-terms-link").click(function(){
    $(".terms-container").addClass("show")
  });

  $(".terms-button-close").click(function(){
    $(".terms-container").removeClass("show")
  });

  $(".footer-privacy-policy-link").click(function(){
    $(".privacy-policy-container").addClass("show")
  });

  $(".privacy-policy-button-close").click(function(){
    $(".privacy-policy-container").removeClass("show")
  });

  $(".s5-signup-button").click(function(){
    $(".header-link-right-container").addClass("expand-right");
    $(".header-link-right-container .header-link").addClass("hide");
    $(".header-sign-up-container").addClass("show");
    $(".header-log-in-container").addClass("show");
  });

  $("#section-1-sign-up").click(function(){
    $(".header-link-right-container").addClass("expand-right");
    $(".header-link-right-container .header-link").addClass("hide");
    $(".header-sign-up-container").addClass("show");
    $(".header-log-in-container").addClass("show");
  });


  $(".header-link-left-container-account").click(function(){
    $(".header-link-left-container-account").addClass("expand-left");
    $(".header-link-left-container-account .header-link").addClass("hide");
    $(".sign-up-container").addClass("show");

  });

  $(".account-close").click(function(event){
    $(".header-link-left-container-account").removeClass("expand-left");
    $(".header-link-left-container-account .header-link").removeClass("hide");
    $(".sign-up-container").removeClass("show");
    event.stopPropagation()
  });

  $(".header-link-right-container-logout").click(function(){
    window.location.href='index.html';
  });

  $(".match-button").click(function(){
    window.location.href='match.html';
  });

  $("#Bundes").click(function(){
    window.location.href='match-list.html';
  });

  $("#Premier").click(function(){
    window.location.href='match-list.html';
  });

  $(".header-link-left-container-back").click(function(){
    window.location.href='user-home.html';
  });

  $(".match-time").click(function(){
    $(".match-time .match-details").addClass("show")
  });

  $(".match-time .match-details").click(function (event) {
    $(".match-time .match-details").removeClass("show");
    $(".match-time .match-statistic").addClass("show");
    event.stopPropagation()
  });

  $(".match-time .match-statistic").click(function (event) {
    $(".match-time .match-statistic").removeClass("show");
    event.stopPropagation()
  });

  $(".bet-button").click(function(){
    $(".betting-choices-container").addClass("show");
  });

  $(".betting-choices-button-close").click(function(){
    $(".betting-choices-container").removeClass("show")
  })

  $(".match-list-link").click(function(){
    window.location.href='match.html';
  });

  var animation1 = new TimelineMax();
  animation1.from("#horizontal-1", 1, { y:-100, borderColor: 'transparent' }, 0)
  animation1.pause()

  var animation2 = new TimelineMax();
  animation2.from("#horizontal-1 .hs-content-container", 0.5, { opacity: 0 }, 0.5)
  animation2.pause()

  var animation3 = new TimelineMax();
  animation3.from("#horizontal-2", 1, { y:-100, borderColor: 'transparent' }, 0)
  animation3.pause()

  var animation4 = new TimelineMax();
  animation4.from("#horizontal-2 .hs-content-container", 0.5, { opacity: 0 }, 0.5)
  animation4.pause()

  var animation5 = new TimelineMax();
  animation5.from("#horizontal-3", 1, { y:-100, borderColor: 'transparent' }, 0)
  animation5.pause()

  var animation6 = new TimelineMax();
  animation6.from("#horizontal-3 .hs-content-container",0.5, { opacity: 0 }, 0.5)
  animation6.pause()

  var animation7 = new TimelineMax();
  animation7.from("#horizontal-4", 1, { y:-100, borderColor: 'transparent' }, 0)
  animation7.pause()

  var animation8 = new TimelineMax();
  animation8.from("#horizontal-4 .hs-content-container",0.5, { opacity: 0 }, 0.5)
  animation8.pause()

  $(window).scroll(function() {
    var top1 = $("#horizontal-1").offset().top;
    var bottom1 = $("#horizontal-1").offset().top + $("#horizontal-1").outerHeight();
    var top2 = $("#horizontal-2").offset().top;
    var bottom2 = $("#horizontal-2").offset().top + $("#horizontal-2").outerHeight();
    var top3 = $("#horizontal-3").offset().top;
    var bottom3 = $("#horizontal-3").offset().top + $("#horizontal-3").outerHeight();
    var top4 = $("#horizontal-4").offset().top;
    var bottom4 = $("#horizontal-4").offset().top + $("#horizontal-4").outerHeight();
    var screen_bottom = $(window).scrollTop() + $(window).innerHeight();
    var screen_top = $(window).scrollTop();

    if ((screen_bottom > top1) && (screen_top < bottom1)){
      animation1.play()
      animation2.play()
      animation3.play()
      animation4.play()
    }

    if((screen_bottom > top3) && (screen_top < bottom3)) {
      animation5.play()
      animation6.play()
      animation7.play()
      animation8.play()
    }

  });
});
