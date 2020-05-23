var tab = ['Business','Mobile'];
var topSwiper = new Swiper ('.swiper1',{
    loop: true,
    });


var mySwiper = new Swiper ('.swiper2', {
     //Optional parameters
    autoHeight: true,
    loop: true,
     //If we need pagination
    pagination: {
      el: '.swiper-pagination2',
        clickable:true,
        renderBullet: function(index,className) {

            return '<span class="'+ className +'">'+(tab[index])+'</span>';
        },
    },

     //Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },

       });

mySwiper.controller.control = topSwiper;



