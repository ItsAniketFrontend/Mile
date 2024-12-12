(function($) {
"use strict";


//blog grid 
var $grid = $('.grid').imagesLoaded( function() {
$grid.isotope({
  itemSelector: '.grid-item',
  masonry: {  
}
});
});
	


// testimonials
document.addEventListener('DOMContentLoaded', function () {
var sliderContainer = document.querySelector('.carousel-testimonials');   
  if (sliderContainer) {  
	var slider = tns({
    container: '.carousel-testimonials',  
    items: 3,                         
		mouseDrag: true,
    autoplay: true,      
    nav: true, 
		navPosition: 'bottom',
    loop: false,
		controls: false, 
    responsive: {
    "0": {
      "items": 1
    },
    "600": {
      "items": 1
    },
		"1000": {
      "items": 2
    }
  },	
  });
	}
});


// testimonials2
document.addEventListener('DOMContentLoaded', function () {
var sliderContainer = document.querySelector('.carousel-testimonials2');   
  if (sliderContainer) {   
	var slider = tns({
    container: '.carousel-testimonials2',  
    items: 1,                         
		mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 5000,      
    nav: true, 
		navPosition: 'bottom',
    loop: true,
		controls: true, 
    responsive: {
    "0": {
      "items": 1
    },
    "600": {
      "items": 1
    },
		"1000": {
      "items": 1
    }
  },	
  });
	}
});


// testimonials3
document.addEventListener('DOMContentLoaded', function () {
var sliderContainer = document.querySelector('.carousel-testimonials3');   
  if (sliderContainer) {    
	var slider = tns({
    container: '.carousel-testimonials3',  
    items: 3,                         
		mouseDrag: true,
    autoplay: true,      
    nav: true, 
		navPosition: 'bottom',
    loop: false,
		controls: false, 
    responsive: {
    "0": {
      "items": 1
    },
    "600": {
      "items": 1
    },
		"1000": {
      "items": 1
    }
  },	
  });
	}
});

// testimonials4
document.addEventListener('DOMContentLoaded', function () {
var sliderContainer = document.querySelector('.carousel-testimonials4');   
  if (sliderContainer) {   
	var slider = tns({
    container: '.carousel-testimonials4',  
    items: 1,                         
		mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 5000,      
    nav: true, 
		navPosition: 'bottom',
    loop: false,
		controls: false, 
    responsive: {
    "0": {
      "items": 1
    },
    "600": {
      "items": 1
    },
		"1000": {
      "items": 1
    }
  },	
  });
	}
});

//scroll to top button
$(document).ready(function() {
$(window).scroll(function() {
if ($(this).scrollTop() > 400) {
$('#toTopBtn').fadeIn();
} else {
$('#toTopBtn').fadeOut();
}
});
$('#toTopBtn').click(function() {
$("html, body").animate({
scrollTop: 0
}, 800);
return false;
});
});


//hamburger nav
$(document).ready(function(){
  $('.nav-button').click(function(){
	$('body').toggleClass('nav-open');
  });
});

//toggle button
$(document).ready(function () {
  $('button.navbar-toggler').on('click', function () {
    $('.animated-icon1').toggleClass('open');
  });
});

/* dropdown small screen navigation menu */
$(document).ready(function(){
$('.menu-item-has-children > span.icon').on('click', function () {
    var $this = $(this).parent();
    $this.toggleClass("dropdown");
});
});


//youtube popup video 
function newMagnificIframe(){
    var $start = 0;
    var $iframe = {
        patterns: {
            youtube: {
                index: 'youtu', 
                id: function(url) {   

                    var m = url.match( /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/ );
                    if ( !m || !m[1] ) return null;

                        if(url.indexOf('t=') != - 1){

                            var $split = url.split('t=');
                            var hms = $split[1].replace('h',':').replace('m',':').replace('s','');
                            var a = hms.split(':');

                            if (a.length == 1){

                                $start = a[0]; 

                            } else if (a.length == 2){

                                $start = (+a[0]) * 60 + (+a[1]); 

                            } else if (a.length == 3){

                                $start = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 

                            }
                        }                                   

                        var suffix = '?autoplay=1';

                        if( $start > 0 ){

                            suffix = '?start=' + $start + '&autoplay=1';
                        }

                    return m[1] + suffix;
                },
                src: '//www.youtube.com/embed/%id%'
            },
            vimeo: {
                index: 'vimeo.com/', 
                id: function(url) {        
                    var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                    if ( !m || !m[5] ) return null;
                    return m[5];
                },
                src: '//player.vimeo.com/video/%id%?autoplay=1'
            }
        }
    };
    return $iframe;    
}

$(document).ready(function() {
  $('.yt-video').magnificPopup({
    type: 'iframe',
		iframe: newMagnificIframe()
  });
});

	
//preloader
$('.preloader').fadeOut(700,function(){$(this).remove();})


// masonry for team custom post type boxes
var $grid1 = $('.masonry-grid1').imagesLoaded( function() {
$grid1.isotope({
  itemSelector: '.masonry-grid-item',
  masonry: {  
}
});
});	


// masonry for program custom post type boxes
var $grid1p = $('.masonry-grid1p').imagesLoaded( function() {
$grid1p.isotope({
  itemSelector: '.masonry-grid-itemp',
  masonry: {  
}
});
});	
	
// masonry for program custom post type boxes
var $grid1pd = $('.masonry-grid1pa').imagesLoaded( function() {
$grid1pd.isotope({
  itemSelector: '.masonry-grid-itempa',
  masonry: {  
}
});
});		

// masonry for program custom post type boxes
var $grid1pde = $('.masonry-grid1pae').imagesLoaded( function() {
$grid1pde.isotope({
  itemSelector: '.masonry-grid-itempae',
  masonry: {  
}
});
});		
	
// navigation on scroll change
$(document).ready(function () {
 var menu = $('.white-nav');
$(window).scroll(function () {
  var y = $(this).scrollTop();
 var z = $('.navbar1').offset().top;
if (y >= z) {
menu.addClass('navbarscroll');
 }
else{
menu.removeClass('navbarscroll');
}
});
});


// modal popup form
var modal = document.getElementById("modalForm");
var btn = document.getElementById("modalButton");
var span = document.getElementsByClassName("close")[0];
if (btn) {
btn.onclick = function() {
  modal.style.display = "block";
}
}
if (span) {
span.onclick = function() {
  modal.style.display = "none";
}
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//for closing mobile menu when page back
window.addEventListener('beforeunload', function (e) {
    $('.navbar-collapse').removeClass('show');
});



})(jQuery);

