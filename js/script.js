$(document).ready(function(){

  //Set active class
  setActiveClassOnNavLink();

  $('.nav-link').click(function(){
    $('.nav-link').removeClass("active");
    $(this).addClass("active");
  });

});

function setActiveClassOnNavLink(){

  var hash = $(location).attr('hash');

  if(hash == ''){  //Load homepage by default if no hash specified
    $('a[href="#home"]').addClass("active");
    window.location.hash = "home";
  } else {
    $('a[href="'+hash+'"]').addClass("active");
  }
}


