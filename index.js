$(document).ready(function() {
    let currentIndex = 0;
    const images = $('.slider_images img');
    const textContainer = $('.slider_txt_container p');
    const sliderTexts = [
        'look beyond the ordinary',
        'explore the unseen',
        'discover the unique',
        'expect the unexpected',
        'find beauty in the everyday'
    ];

    function showSlide(index) {
        images.hide();
        images.eq(index).show();
        textContainer.text(sliderTexts[index]);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
    }

    $('.slider_indicator').click(nextSlide);

    showSlide(currentIndex);

    // Optional: Auto-slide functionality
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});