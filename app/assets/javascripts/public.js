//= require jquery
//= require jquery_ujs

//= require gko/public/jquery.bootstrap.navbarhover.js
//= require gko/public/jquery.grid.responsive.js

//= require twitter/bootstrap/transition.js
//= require twitter/bootstrap/alert.js
//= require twitter/bootstrap/button.js
//= require twitter/bootstrap/collapse.js
//= require twitter/bootstrap/dropdown.js
//= require twitter/bootstrap/modal.js
//= require twitter/bootstrap/tooltip.js
//= require twitter/bootstrap/carousel.js
//= require flexslider/jquery.flexslider.js

var $window,$body,$header,$mainContainer;
var headerHeight, viewPortHeight, viewPortWidth, availableHeight;



$(document).ready(function() {
	Carousel.init();  
}); 

var Carousel = {

	init : function() { 
		
		if($('#carousel li').length > 1) {
			// The slider being synced must be initialized first
			  $('#carousel').flexslider({
			    animation: "slide",
			    controlNav: false,
			    animationLoop: false,
			    slideshow: false,
			    itemWidth: 156,
			    itemMargin: 5,
			    asNavFor: '#slider'
			  });

			  $('#slider').flexslider({
			    animation: "slide",
			    controlNav: false,
			    animationLoop: false,
			    slideshow: false,
			    sync: "#carousel"
			  });
		} else {
			$('#carousel').hide();
		} 

	}
}
