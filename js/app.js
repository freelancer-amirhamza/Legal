const menuBtn = document.querySelector('#menu-btn')
const sideBtn = document.querySelector('#side-btn')
const menuBar = document.querySelector('.menu-bar')
const sideMenu = document.querySelector('.side-menu-bar')


menuBtn.onclick = () =>{
    menuBtn.classList.toggle('bx-x')
    menuBar.classList.toggle('active')
}
sideBtn.onclick = () =>{
    sideBtn.classList.toggle('bx-x')
    sideMenu.classList.toggle('active-side-menu')
}

document.addEventListener('DOMContentLoaded', function() {
    var swiperTop = new Swiper(".mySwiperTop", {
        navigation: {
        nextEl: ".bx-chevron-right",
        prevEl: ".bx-chevron-left",
        },
        slidesPerView: 1 ,
        loop: true,
        spaceBetween:1,
        speed: 600,
        breakpoints: {
        640: {
        slidesPerView: 1,
        spaceBetween:2,
        },
        768: {
        slidesPerView: 2,
        spaceBetween:2,
        },
        1024: {
        slidesPerView: 2.5,
        spaceBetween:2,
        },
        },
    });



    var swiperDw = new Swiper(".mySwiperDw", {
        slidesPerView: 1,
        spaceBetween: 300,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        speed: 800,
    });
});

// Scroll Reveal


ScrollReveal({
    reset:true,
    distance: '100px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal(
' .service .contents, .section-stories .container>.content,  ' , {origin:'left'});
ScrollReveal().reveal(' .banner>.contents, .service .slider-section, .section-stories .container>.cards ,.testimonial>.content1 ', {origin:'right'});
ScrollReveal().reveal('.navbar .contents, .copyright', {origin:'top'});
ScrollReveal().reveal('.box-item, .banner>.image, .section-students, .blogs-wrapper .container>.content, .blogs-wrapper .cards, .newsletter, .footer',{origin:'bottom'});
