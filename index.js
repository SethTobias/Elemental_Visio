$(document).ready(function() {
    let currentIndex = 0;
    const images = $('.slider_images img');
    const textContainer = $('.slider_txt_container p');
    const ui = $('.slider_ui svg');
    const sliderTexts = [
        'look beyond the ordinary',
        'explore the unseen',
        'venture into the unique',
        'beyond the expected',
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

    $('.slider_indicator').click(nextSlide);

    showSlide(currentIndex);
    setInterval(nextSlide, 5000);
});