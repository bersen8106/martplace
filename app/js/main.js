$(function() {

    $('.rate-stars').rateYo({
        rating: 4.5,
        spacing: "5px",
        maxValue: 5,
        numStars: 5,
        starWidth: '15px',
        readOnly: true,
        ratedFill: '#F39C12',
        normalFill: "transparent",
    });

    $('.rate-stars, .mix').rateYo({
        rating: 4.5,
        spacing: "5px",
        maxValue: 5,
        numStars: 5,
        starWidth: '19px',
        readOnly: true,
        ratedFill: '#F39C12',
        normalFill: "transparent",
    });



    $('.product-slider').slick({
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/prew-arrow.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/next-arrow.svg" alt=""></img>',
    });

});