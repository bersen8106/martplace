$(function() {

    var mixer = mixitup('.cards__inner');

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

    $('.product-slider').slick({
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/prew-arrow.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/next-arrow.svg" alt=""></img>',
    });
    $('.feed__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/prew-arrow.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/next-arrow.svg" alt=""></img>',
    });


});