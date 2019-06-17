$(document).ready(function () {
  var animation1 = new TimelineMax();

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

  $(".who").click(function(){
    $(window).scrollTo(".s2-content-container", 0,5);
  });

  $(".why").click(function(){
    $(window).scrollTo(".s3-content-container", 0.5);
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

  var animation2 = new TimelineMax();
  var animation3 = new TimelineMax();


  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
  // animate to second panel
      .to("#horizontal-sections-container", 1,   {x: "-50vw"})
      .to("#horizontal-sections-container", 1,   {x: "-100vw"})
      .to("#horizontal-sections-container", 1,   {x: "-150vw"})

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#horizontal-sections",
    triggerHook: "onLeave",
    duration: "500%"
  })
      .setPin("#horizontal-sections")
      .setTween(wipeAnimation)
      .addTo(controller);


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

});
