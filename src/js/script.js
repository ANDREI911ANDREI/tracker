$('.carusel_slider').slick({
	speed: 1500,
	adaptiveHeight: true,
	autoplay: false,
	autoplaySpeed:1500,
	prevArrow: '<button type="button" class="slick-prev"><img src=img/carusel/left.svg></button>',
	nextArrow: '<button type="button" class="slick-next"><img src=img/carusel/rigth.svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				dots: true ,
				arrows: false 
			}
		},
		{
			breakpoint: 768,
			settings: {
				dots: false ,
				arrows: false 
			}
		},
		{
			breakpoint: 600,
			settings: {
				dots: false ,
				arrows: false 
			}
		},
		{
			breakpoint: 480,
			settings: {
				dots: false ,
				arrows: false 
			}
		}
	]

});
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
	$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

$('.catalog-item__link').each(function(i) {
	$(this).on('click',function(e) {
		e.preventDefault();
		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	})
});
$('.catalog-item__back').each(function(i) {
	$(this).on('click',function(e) {
		e.preventDefault();
		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	})
});


