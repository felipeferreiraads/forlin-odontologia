$(function(){
	var height = $(window).height();
	$('.content').height(height - 95);
	
	$('.caption').hide().fadeIn(800).css('display','flex');
	$('#about p').hide().fadeIn(800);
	$('#services .menu').hide().fadeIn(800);
	$('#services .content-service').hide().fadeIn(800);
	$('#team .menu').hide().fadeIn(800);
	$('#team .left').hide().fadeIn(800).css('display','flex');
	$('#team .right').hide().fadeIn(800);

	$('.form').height($('#contact .container').height());
});
