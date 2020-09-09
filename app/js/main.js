$(function() {

    $('.rate-star').rateYo({
        rating: 4.5,
        starWidth: '20px',
        normalFill: "#fff",
        spacing: "5px",
        readOnly: true,
    });



    $('.weekly-product-slider').slick({
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/prew-arrow.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/next-arrow.svg" alt=""></img>',
    });

});