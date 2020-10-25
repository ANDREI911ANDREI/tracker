$('.carusel_slider').slick({
  speed: 1500,
  adaptiveHeight: true,
  autoplay: true,
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