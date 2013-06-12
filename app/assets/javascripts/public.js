//= require jquery
//= require jquery_ujs
//= require gko/public/jquery.bootstrap.navbarhover.js
//= require gko/public/jquery.grid.responsive.js
//= require twitter.bootstrap.2.3.1/bootstrap/transition.js
//= require twitter.bootstrap.2.3.1/bootstrap/alert.js
//= require twitter.bootstrap.2.3.1/bootstrap/button.js
//= require twitter.bootstrap.2.3.1/bootstrap/carousel.js
//= require twitter.bootstrap.2.3.1/bootstrap/collapse.js
//= require twitter.bootstrap.2.3.1/bootstrap/tab.js
//= require twitter.bootstrap.2.3.1/bootstrap/dropdown.js
//= require twitter.bootstrap.2.3.1/bootstrap/modal.js
//= require flexslider/jquery.flexslider.js 

var $window, $body, $header, $mainContainer;
var headerHeight, viewPortHeight, viewPortWidth, availableHeight;


	var Carousel = {

		init: function() {

			if ($('#carousel li').length > 1) {
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
$(document).ready(function() {
	Carousel.init();
});

