$(document).ready(function(){

	//validate

		$('.validate-form').each(function() {   
	    $(this).validate({        
			    	rules:{ //правила для полей 
							name:{
								required:true,
							},
							phone:{
								required:true,
								minlength:5,
								number:true
							},
							comment:{
								required:true,
								minlength:5,
							},
						},
						messages:{
							name:{
								required: 'Обязательное поле',
							},
							phone:{
								required: 'Обязательное поле',
								number:'Введите правильный номер',
								minlength:'Номер должен быть длиннее',
							},
							comment:{
								required: 'Обязательное поле',
								minlength:'Сообщение должно быть длиннее',
							},
						},
						submitHandler : function(form){ 
								$('.modal-close').click();
								setTimeout(function(){
											$('.modal-true').bPopup({
												closeClass:'modal-close',
													position:['auto','auto'], // position center
													follow: [true,true],
													autoClose: 2000
											}); 
								},2000)
					}
			    });
			});
		
		//modal review
		$('.get-modal-review').click(function(){
				$('.modal-review').bPopup({
					closeClass:'modal-close',
						position:['auto','auto'], // position center
						follow: [true,true],
				}); 
				event.preventDefault();
		})
		$('.title-page').click(function(){
				$('.modal-true').bPopup({
					closeClass:'modal-close',
						position:['auto','auto'], // position center
						follow: [true,true],
				}); 
				event.preventDefault();
		})
		$('.get-modal-order').click(function(){
				$('.modal-order').bPopup({
					closeClass:'modal-close',
						position:['auto','auto'], // position center
						follow: [true,true],
				}); 
				event.preventDefault();
		})
	//init responsive table
	$('.table-price table').stacktable();

	//Init fancybox
	$(".fancybox").fancybox();
	//Style scroll
	$(".review-block__text").mCustomScrollbar({
	  autoDraggerLength: true // size druger
	});
	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	//message for old IE
	function isIE () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}

	if (isIE() < 10 &&  isIE()) {
		$('body').empty();
		$('body').prepend('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>');
	}

	//for init SVG 
	svg4everybody();
	
	/* ###### For SlideToggle Elements  ######*/
	var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.header-nav__toggle-el','.header-nav__wraper');

	//style select
	$("select").select2({
		width: 'element',
		minimumResultsForSearch: Infinity
	});

	//add icon caret
	$('b[role="presentation"]').hide();
	$('.select2-selection__arrow').append('<svg class="icon"><use xlink:href="#arrow-down"></use></svg>');

	//====== sliders =====

	//slider-clients
	$(".slider-items__wraper").owlCarousel({
	 items : 5,
	responsive : {
	 		0:{
			 	items : 2
		 	},
		 	768:{
			 	items : 3
		 	},
		 	1024:{
			 	items : 4
		 	},
		 	1280:{
			 	items : 5
		 	},
	  },
	 dots: true,
	 autoplay : false,
	 singleItem:true,
	 nav:true,
	 loop:true,
	 fluidSpeed:1000,
	 autoplayTimeout:4000,
	 navText:[
			'<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>',
			'<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>'
	 	]
	 }
	);

	$(".slider-one-item").owlCarousel({
	 items : 1,
	 autoHeight : true,
	 dots: true,
	 autoplay : false,
	 singleItem:true,
	 fluidSpeed:1000,
	 autoplayTimeout:4000,
	 loop:true,
	 navText:[
			'<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>',
			'<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>'
	 	]
	 }
	);
	//slider review
	$(".slider-review-wraper").owlCarousel({
		items:1,
		 dots: true,
		 autoplay : false,
		 singleItem:true,
		 fluidSpeed:1000,
		 autoplayTimeout:4000,
		 stagePadding: 0,
		 rewindNav: false
	 }
	);

	//slider baner
	$(".slider-baner").owlCarousel({
		items:1,
		 autoplay : false,
		 singleItem:true,
		 fluidSpeed:1000,
		 rewindNav: false
	 }
	);
	//====== sliders =====

})

//cash SVG

;( function( window, document )
{
	'use strict';

	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );