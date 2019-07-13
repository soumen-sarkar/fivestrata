jQuery(function($) {'use strict';
                    
    var headerHeight = $('.headerWide').height();
	$('.navbar-collapse ul li a').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - headerHeight}, 1000);
		return false;
	});
                    
    // Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})
	};
                    
    //Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();
                    
});

$(window).load(function(){ 
    
    //Image carousel
	/*$('.carousel').carousel({
		interval: 4000
	})*/	
    
    //Script for nav button animation	
    $(".navbar-toggle").on('click', function(){
      $(this).toggleClass("active");
    });
	
	//Image carousel
	$('.carousel').carousel({
		//interval: 4000
	})
    
    //Script for Back to top
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $("#toTop, .logo").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });    
	
	//Space for useing another script
    
});

var headerHeight = $('.headerWide').height();
$('body').css('padding-top', headerHeight);

$(window).resize(function(){
    
    var headerHeight = $('.headerWide').height();
    $('body').removeAttr('style');
    $('body').css('padding-top', headerHeight);
        
});