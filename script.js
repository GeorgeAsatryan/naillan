$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:3,
		speed:3500,
		infinite:true,
		autoplay:true,
		autoplayspeed:3000,
		centerMode:true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});