var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    loop: true,
    spaceBetween: 100,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
      //autoplay: {
    //delay: 5000,
  //},
      //pagination: {
      //el: '.swiper-pagination',
    //},
});

var tl  = gsap.timeline()

tl.from('.logo img',{ opacity:0, ease: 'power1.inOut' })
.from('.logo h1',{ opacity:0, ease: 'power1.inOut' })
.from('.logo span',{ opacity:0, ease: 'power1.inOut' })
.from('.menu li',{opacity: 0,x:20,stagger:0.1,ease:"power1.inOut"})
.from('.teaser-container__image img',{opacity: 0, y:40, ease:'power1.inOut'})
.from('.teaser-container__content h1',{ opacity:0, ease: 'power1.inOut' })
.from('.down1',{opacity: 0, x:-40, ease:'power1.inOut'})
.from('.down2',{opacity: 0, x:40, ease:'power1.inOut'})

var controller = new ScrollMagic.Controller();



var action = gsap.timeline()

action.from('.features-wrapper__one',{opacity:0,y:-20, ease:'power1.inOut'})
.from('.features-wrapper__two',{opacity:0,y:-20, ease:'power1.inOut'})
.from('.features-wrapper__three',{opacity:0,y:-20, ease:'power1.inOut'})

var scene = new ScrollMagic.Scene({
    triggerElement: '.features-wrapper__one',
    reverse: false
}).setTween(action)
.addTo(controller)


var action1 = gsap.timeline()

action1.from('.features-wrapper h3',{opacity:0,y:-20,ease:'power1.inOut'})
.from('.list_one',{opacity:0, stagger:0.05})
.from('.list_two',{opacity:0, stagger:0.05})
.from('.features-wrapper img',{ opacity: 0, y:'100%',ease:'Expo.easeInOut' })
     
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.list_one',
    reverse: false

}).setTween(action1)
.addTo(controller)

var action2 = gsap.timeline()

action2.from('.details-wrapper__content h4',{opacity:0,y:-20,ease:'power1.inOut'})
.from('.detail-header',{opacity:0, y:-20,ease:'Expo.easeInOut'})
.from('.details-wrapper__image',{opacity:0})
.from('.details-wrapper__content ul li',{ opacity: 0, y:-10,ease:'Expo.easeInOut',stagger:0.1 })
     
var scene2 = new ScrollMagic.Scene({
    triggerElement: '.details-wrapper__content',
    reverse: false

}).setTween(action2)
.addTo(controller)

