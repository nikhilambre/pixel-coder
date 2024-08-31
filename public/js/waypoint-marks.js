

$(document).ready(function() {

    $('.scroll_way').waypoint(function(){
        $(this).addClass('in');
    },{offset:'90%'});

    $('.scroll-animation1').waypoint(function(){
        $(this).addClass('swing');
    },{offset:'60%'});   

    $('.scroll-animation2').waypoint(function(){
        $(this).addClass('fadeIn');
    },{offset:'80%'});   

    $('.scroll-animation3').waypoint(function(){
        $(this).addClass('fadeIn');
    },{offset:'80%'});   

    $('.scroll-animation4').waypoint(function(){
        $(this).addClass('fadeIn');
    },{offset:'80%'});

    $('.scroll-animation5').waypoint(function(){
        $(this).addClass('fadeIn');
    },{offset:'80%'}); 

    $('.scroll-animation6').waypoint(function(){
        $(this).addClass('fadeIn');
    },{offset:'80%'}); 

    $('.scroll-animation7').waypoint(function(){
        $(this).addClass('fadeIn');
    },{offset:'80%'});

    $('.scroll-animation8').waypoint(function(){
        $(this).addClass('fadeIn');
    },{offset:'80%'});      



});