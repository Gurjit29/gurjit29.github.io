$(document).ready(function(){

  $('.nav-link').click(function(){
    $('.nav-link').removeClass("active");
    $(this).addClass("active");
});

  //Override bootstrap accordion behaviour
    // $('.accordion-button').removeClass("collapsed");
    // $('.accordion-body').addClass("show");
    // $('.accordion-collapse').addClass("show");
});