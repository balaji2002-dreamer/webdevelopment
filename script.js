// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function showContactPopup() {
    document.getElementById('contact-popup').style.display = 'block';
}

function hideContactPopup() {
    document.getElementById('contact-popup').style.display = 'none';
}