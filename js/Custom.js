new WOW().init();
// Circle Progress Bar
$(".progress1").loading();
$(".progress2").loading();
$(".progress3").loading();
$(".progress4").loading(); 


// Back To Top Button
$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });
  
  $(".scrollup").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  })