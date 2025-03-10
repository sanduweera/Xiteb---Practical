let navbar = document.querySelector('.header .navbar');
let loginForm = document.querySelector('.header .login-form');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
};

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".news-slider", {
    loop: true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
    },
});