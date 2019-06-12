$(document).ready(function () {
  var animation1 = new TimelineMax();

  $(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 150) {
      $(".cookie").removeClass("show");
    }
  });

  $(".cookie-button").click(function(){
    $(".cookie").removeClass("show");
  });

  $(".header-link-left-container").click(function(){
    $(".header-link-left-container").addClass("expand-left");
    $(".header-link-left-container .header-link").addClass("hide");
    $(".sign-up-container").addClass("show");
  });

  $(".sign-up-close").click(function(event){
    $(".header-link-left-container").removeClass("expand-left");
    $(".header-link-left-container .header-link").removeClass("hide");
    $(".sign-up-container").removeClass("show");
    event.stopPropagation();
  });

  $("#signup-button").click(function(){
    console.log("clicked");
  });

  $(".header-link-right-container").click(function(){
    $(".header-link-right-container").addClass("expand-right");
    $(".header-link-right-container .header-link").addClass("hide");
    $(".log-in-container").addClass("show");
  });

  $(".log-in-close").click(function(event){
    $(".header-link-right-container").removeClass("expand-right");
    $(".header-link-right-container .header-link").removeClass("hide");
    $(".log-in-container").removeClass("show");
    event.stopPropagation();
  });

  $("#login-button").click(function(){
    window.location.href='user-home.html';
  });

  $(".sc-button").click(function(){
    $(".sc-form-container").addClass("show")
  });

  $(".sc-form-close").click(function(){
    $(".sc-form-container").removeClass("show")
  });

  $(".footer-disclaimer-button").click(function(){
    $(".disclaimer-container").addClass("show")
  });

  $(".disclaimer-button-close").click(function(){
    $(".disclaimer-container").removeClass("show")
  });

  $(".footer-privacy-policy-button").click(function(){
    $(".privacy-policy-container").addClass("show")
  });

  $(".privacy-policy-button-close").click(function(){
    $(".privacy-policy-container").removeClass("show")
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


  //USER HOME PAGE//

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
});
