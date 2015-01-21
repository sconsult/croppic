$(document).ready(function(){
	var optionsFloating = $('#optionsFloating');
	var defaultOptionsTop = optionsFloating.offset().top;
	var defaultOptionsBottom = $('#downloadTarget').offset().top - $(window).height();
	var defaultOptionsWidth = optionsFloating.width();
	
	$(window).scroll(function(){
		if( $(window).scrollTop() > defaultOptionsTop - 100 && $(window).scrollTop() < defaultOptionsBottom ){
			optionsFloating.addClass('fixed');
			optionsFloating.width(defaultOptionsWidth)
		}else{
			optionsFloating.removeClass('fixed');
		}
	})
	
	$('.scrollToLink').on('click',function(){
		
		var divId = $(this).attr('data-scroll');
		var scrollTop = $('#'+divId).offset().top - 10;
		
		
		$('html, body').animate({ scrollTop: scrollTop+'px' });
	})
	
	
$('#web_by').hover(function(){
	$('#jobotic').animate({right:'80px'},600, function(){	 $('#web_by label').css('display','block'); });
	},
	function(){
		$('#web_by label').css('display','none').stop(true, true)
		$('#jobotic').animate({right:'1900px'},1800, function(){	 $('#jobotic').css('right','-100px').stop(true, true)	})
});
$('#web_by').click(function(){ window.location.href = 'http://www.steinlinconsulting.com';});
		
	
})