/* --------------------------------------------- 
* Filename:     custom.js
* Version:      1.0.0 (2016-08-06)
* Website:      http://www.zymphonies.com
* Description:  Global Script
* Author:       Zymphonies Support Team
                support@zymphonies.com
-----------------------------------------------*/

jQuery(document).ready(function($){

	$('.flexslider').flexslider({
    	animation: "slide"	
    });
	
	//Mobile menu toggle
	$('.navbar-toggle').click(function(){
		$('.region-primary-menu').slideToggle();
	});

	$('li.dropdown').click(function(){
		$(this).toggleClass('openSubMenu');
	  	$(this).find('ul').toggle();
	});
	
});