(function ($) {
  "use strict";
  /*============= preloader js css =============*/
  var cites = [];
  cites[0] = "بهترین تیم طراحی وبسایت ما هستیم؟";
  cites[1] = "ما میزبان ایده های خلاقانه شما هستیم";
  cites[2] = "رسیدن به اوج کسب وکار خود با تیم ما";
  cites[3] = "بهترین پشتیبانی را با ما دارید.";
  var cite = cites[Math.floor(Math.random() * cites.length)];
  $("#preloader p").text(cite);
  $("#preloader").addClass("loading");

  $(window).on("load", function () {
    setTimeout(function () {
      $("#preloader").fadeOut(500, function () {
        $("#preloader").removeClass("loading");
      });
    }, 500);
  });
})(jQuery);
