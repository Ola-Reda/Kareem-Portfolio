//loader
const body = document.querySelector("body")
const loader = document.querySelector(".loader")
setTimeout(() => {
    load()
}, 2000)
function load() {
    body.style.overflow = "auto";
    loader.classList.add('hide')
}



//swiper
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
        0: {
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