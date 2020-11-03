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
				dots: false ,
				arrows: false 
			}
		},
		{
			breakpoint: 768,
			settings: {
				dots: false,
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
				dots: false,
				arrows: false 
			}
		}
	]

});
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() { /* открывает страницу табов */
	$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

$('.catalog-item__link').each(function(i) { /* работа ссылки ПОДРОБНЕЕ*/
	$(this).on('click',function(e) {
		e.preventDefault();
		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	})
});
$('.catalog-item__back').each(function(i) {/* работа ссылки НАЗАД*/
	$(this).on('click',function(e) {
		e.preventDefault();
		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	})

	/*модальные окна*/

	$('[data-modal=consultation]').on('click', function(){ /*назначает работу модального окна при нажатии на заданную кнопку */
		$('.overlay,#consultation').fadeIn('slow');
	});
	$('.modal__close').on('click',function(){ /* назначает закрытие модального окна при нажатии на крестик*/
		$('.overlay,#consultation,#order,#thaks').fadeOut('slow');	
	});

	$('.button_mini').each(function(i){ /* функция позволяет считывать нужную строку при открытии модального окна*/
		$(this).on('click',function(){
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay,#order').fadeIn('slow');
		});
	});
});
function validateForms(form){
	$(form).validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			phone: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required: "Пожалуйста, введите свое имя",
				minlength: jQuery.validator.format("Введите {0} символа!")
			  },
			phone: "Пожалуйста, введите свой номер телефона",
			email: {
			  required: "Пожалуйста, введите свою почту",
			  email: "Неправильно введен адрес почты"
			}
		}
	});
};

validateForms('#promo form');
validateForms('#consultation form');
validateForms('#order form');


$('input[name=phone]').mask("+7 (999) 999-99-99"); //маска номера 

	$('form').submit(function(e) {  // отправка формы на почту 
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});

// плавный скролл and page up

$(window).scroll(function(){
	if($(this).scrollTop() > 800){
		$('.pageup').fadeIn();
	} else{
		$('.pageup').fadeOut();
	}
});
$("a[href^='#']").click(function(){
	var _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	return false;
});	





