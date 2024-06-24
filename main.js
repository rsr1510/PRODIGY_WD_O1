let navbar = document.querySelector('.navbar');

let menu = document.querySelector('#menu-icon');
let iconaa = document.querySelector('.icons');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  iconaa.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  iconaa.classList.remove('active');
}

window.addEventListener('scroll', () => {
  navbar.classList.toggle('shadow', window.scrollY > 0 );
});
var swiper = new Swiper("#home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".coming-container", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },

  },
});
