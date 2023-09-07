
/** SCROLL UP */
function scrollUp () {
  const scrollUp = document.getElementById ('scroll-up');

  if (this.scrollY >= 350) {
    scrollUp.classList.add ('show-scroll');
  } else scrollUp.classList.remove ('show-scroll');
}
window.addEventListener ('scroll', scrollUp);



/** Header Scroll */
function scrollHeader () {
  const header = document.getElementById ('header');
  if (this.scrollY >= 50) {
    header.classList.add ('scroll-header');
  } else {
    header.classList.remove ('scroll-header');
  }
}
window.addEventListener ('scroll', scrollHeader);


const toggleItem = (item) => {
  const accordionContent = item.querySelector ('.about-accordion-content')
  if (item.classList.contains('.accordion-open')) {
    accordionContent.removeAttribute ('style')
    item.classList.remove ('.accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
  item.classList.add ('.accordion-open');
  }
}
/*============ Image slider =======================*/
$(document).ready(function(){
  $('.slick-carousel').slick({
    infinite: true,
    autospeed: 10,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: '10px',

    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],

  });

});


/*============== Video Player =======================*/
let galVideo=document.querySelectorAll('video');

galVideo.forEach(play => play.addEventListener('click', () =>{
  play.classList.toggle('active');

  if(play.paused){
    play.play();
  }else{
    play.pause();
    play.currentTime=0;
  }
}));

/*============== Image Zoom out =========================*/
let imgContainer=document.querySelectorAll('.services img').forEach(image=>{
  image.onclick=()=>{
      document.querySelector ('.popup-img').style.display = 'block';

      document.querySelector ('.popup-img img').src = image.getAttribute('src');
  }
    
});

let spanImg=document.querySelector('.popup-img span').onclick=()=>{
   document.querySelector('.popup-img').style.display = 'none';
}
/*============== Popup Slider =====================*/

const swiper = new Swiper ('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});







  


