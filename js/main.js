/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var support = { animations : Modernizr.cssanimations },
		container = document.getElementById( 'ip-container' ),
		header = container.querySelector( 'header.ip-header' ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}

			startLoading();
		};

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		classie.add( container, 'loading' );

		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		}
	}

	function startLoading() {


		
				/*$(window).on("click",function(){

					
					 
					    var pagelink = "../../FullLayout/";
					 var url = pagelink+ "js/boxlayout.js";
        					$.getScript(url,function(){
					    $.ajax({
					        url : pagelink + "index.html",
					        type : "GET",
					        dataType : "html"
					    }).done(function(data) {
					    	
					    	$.extend({
									    getCss: function(urls, callback, nocache){
									        if (typeof nocache=='undefined') nocache=false; // default don't refresh
									        $.when(
									            $.each(urls, function(i, url){
									                if (nocache) url += '?_ts=' + new Date().getTime(); // refresh? 
									                $.get(url, function(){
									                    $('<link>', {rel:'stylesheet', type:'text/css', 'href':url}).appendTo('head');
									                });
									            })
									        ).then(function(){
									            if (typeof callback=='function') callback();
									        });
									    },
									});

									var cssfiles=['../../FullLayout/css/component.css'];

									$.getCss(cssfiles, function(){
									    console.log('all css loaded');
									});

								//	alert(data);
					        $(".ip-header").html(data);
					        
					 
					 }).fail(function(jqXHR, textStatus, errorThrown) {
					 $(".ip-header").html("Error!! File is not loaded");
					 });


        				});

					// reached the end
					//if( progress === 1 ) {
						classie.remove( container, 'loading' );
						classie.add( container, 'loaded' );
						

						var onEndHeaderAnimation = function(ev) {
							if( support.animations ) {
								if( ev.target !== header ) return;
								this.removeEventListener( animEndEventName, onEndHeaderAnimation );
							}

							classie.add( document.body, 'layout-switch' );
							window.removeEventListener( 'scroll', noscroll );
						};

						if( support.animations ) {
							header.addEventListener( animEndEventName, onEndHeaderAnimation );
						}
						else {
							onEndHeaderAnimation();
						}
					//}


				})*/
					
	}
	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	init();

})();

// $('.ip-logo').ripples({
// 			resolution: 128,
// 			dropRadius: 20, //px
// 			perturbance: 0.04
// 		});

particlesJS("particles-js",
 {"particles":{"number":{"value":355,"density":{"enable":true,"value_area":789.1476416322727}},
 "color":{"value":"#ffffff"},
 "shape":{"type":"circle",
 "stroke":{"width":0,"color":"#000000"},
 "polygon":{"nb_sides":5},
 "image":{"src":"img/github.svg","width":100,"height":100}},
 "opacity":{"value":0.48927153781200905,"random":false,"anim":{"enable":true,"speed":0.2,"opacity_min":0,"sync":false}},
 "size":{"value":2,"random":true,"anim":{"enable":true,"speed":2,"size_min":0,"sync":false}},
 "line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
 "move":{"enable":true,"speed":0.8,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
 "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},
 "onclick":{"enable":true,"mode":"push"},"resize":true},
 "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
 "bubble":{"distance":83.91608391608392,"size":2,"duration":3,"opacity":1,"speed":3},
 "repulse":{"distance":200,"duration":0.4},
 "push":{"particles_nb":4},
 "remove":{"particles_nb":2}}},"retina_detect":true});


$(".subscribe").click(function(){
	$(this).fadeOut(400);
		$(".cmngsoon").fadeOut(400,function(){
			$(".subs-input").fadeIn(400);
		});
		
});

$("#itrix-subscription").submit(function(){
	$(".subscription").append('<span class="thq" style="display:none">Dear ' + document.getElementById("sname").value + ', Thanks for Subscribing to us! </span><span class="thq2" style="display:none;color:#2EABE2;">See you at Itrix!!</span>')
	$(".subs-input").fadeOut(400,function(){
		$(".thq").fadeIn(400, function(){
			$(".thq2").fadeIn(400);
		})
	});
	return false;
})