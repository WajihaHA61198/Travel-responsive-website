// headers btns --> form's class
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');  

// login
let formBtn = document.querySelector('#login-btn'); // from header icons
let loginForm = document.querySelector('.login-form-container'); // login open
let formClose = document.querySelector('#form-close'); // icon to close the login

// for responsive menu bar
let menu = document.querySelector('#menu-bar');  // three lines on top left for menu
let navbar = document.querySelector('.navbar');  // menu option

// home's videos slider
let videoBtn = document.querySelectorAll('.vid-btn'); // all 5 videos



window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active'); //
}



// @--CLICK
// 1- headers--> form's class
searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times');  // cross btn
    searchBar.classList.toggle('active');  
    // classList= This property is useful to add, remove and toggle CSS classes on an element.
});

// 3- for responsive menu bar
menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');  // cross btn
    navbar.classList.toggle('active');  
});

// 2- login
formBtn.addEventListener('click', () =>{ // by clicking login btn from header, open loginform
    loginForm.classList.add('active');
});
formClose.addEventListener('click', () =>{ // by click on cross loginform remove
    loginForm.classList.remove('active');
});

// 4- video section 
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


// swiper for review
// .review-slider main one class alongside swiper-container which is by default
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

// swiper for brands
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});