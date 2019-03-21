$(document).ready(function(){

  console.log( window.location.href );

  if(window.location.href=="https://chaussures2016.com/") {
    $("#sidebar").css({width:'100%'});

    $("#btnblog").click(function(){
      $("#sidebar").animate({width:'33.3333%'},'slow');
    });
  }
});