let navbar = document.querySelector(".header .navbar");

let menu = document.querySelector("#menu-btn");

menu.onclick = () => {
    navbar.classList.toggle("active");
    menu.classList.toggle("fa-times")
}

let cart = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
    cart.classList.add("active");
}

document.querySelector("#close-form").onclick = () => {
    cart.classList.remove("active");
}

var swiper = new Swiper(".home-slider", {
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}); 
