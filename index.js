// PARALLAX

let cena = document.getElementById("cena");
let parallaxInstance = new Parallax(cena);

// SWIPER

let keys = [
    "Mercúrio",
    "Vênus",
    "Terra",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Netuno"
];

let slider = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true,
    pagination: {
        el: ".planet-links",
        clickable: true,
        renderBullet: function(index, className) {
            return '<div class="' + className + '">' + keys[index] + "</div>";
        }
    }
});