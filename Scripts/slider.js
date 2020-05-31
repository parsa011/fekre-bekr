
$(document).ready(function(){

	$('#img2').hide();
	$('#img3').hide();
	$('#img4').hide();

	

	setInterval(function(){
      $('#slider-container :first-child').fadeOut(3000)
         .next('img').fadeIn()
         .end().appendTo('#slider-container');},
      6000);

	$('#next').click(function(){

		$('#slider-container :first-child').hide().next('img').show().end().appendTo('#slider-container');

	});
	
	$('#prev').click(function(){

		$('#slider-container :last-child').hide().prev('img').show().end().prependTo('#slider-container');

	});

});