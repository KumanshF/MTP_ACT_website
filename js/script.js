/*----SET height OF DIV---*/
$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('#viewFirst').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });

  $('#main-content').load(MTP_ACT.html+'#content')

});

/*--------NAV TOGGLE COLLAPSE ON LOSING FOCUS--*/
$(function (){
	$("#navbarToggle").blur(function (event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 768){
			$("#bs-example-navbar-collapse-1").collapse('hide');
		}
	});
    $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});
/*---------LOADING CONTENT INTO DIV #MAIN-CONTENT-------*/
$(document).ready(function() {
  $('#main-content').load('mtpAct.html');
})
$('nav a').on('click', function(e){
	e.preventDefault();
	var url=this.href;
	$('#main-content').load(url+'#content').hide().fadeIn('slow');
	});


$("nav a").on("click", function(){
	$('nav li.active').removeClass('active');
   $(this).parent().addClass("active");
});

/*-------------SCROLL DOWN BUTTON---------*/
$("#scrollDown").click(function() {
    windowWidth=$(window).innerWidth();
    if (windowWidth>768) {
    	$('html,body').animate({
        scrollTop: $("#section2").offset().top},
        'slow');
    }
    else{
    	$('html,body').animate({
        scrollTop: $(".navbar-header").offset().top},
        'slow');
    }
});




