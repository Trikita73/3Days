$(document).ready(function() {

	$(".main_mnu_button").click(function() {
		$(".top_mnu ul").slideToggle();
	});


	$(".fancybox").fancybox();


	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


	$("input, select, textarea").jqBootstrapValidation();


	$(".top_mnu ul a").mPageScroll2id();


	$(".section_header h2").animated("zoomInRight");
	$(".s_descr").animated("fadeIn");

	$(".items_resume").animated("fadeInLeftBig");

	$(".social_wrap").animated("bounceInUp");

	$(".section_content .item_image_animated1").animated("fadeInLeftBig");
	$(".section_content .item_image_animated2").animated("fadeInRightBig");

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

}); 

//Скролл Верхнего Меню 
var header = new Headhesive('.head_top');