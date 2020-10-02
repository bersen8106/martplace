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


    $('.js-range-slider').ionRangeSlider({
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$",
    });

    $('.product-list-view').on('click', function() {
        $('.mini-card__item').addClass('list');
        $('.list-cards__wrap').addClass('list');
        $('.product-list-view').addClass('active');
        $('.product-grid-view').removeClass('active');
    });
    $('.product-grid-view').on('click', function() {
        $('.mini-card__item').removeClass('list');
        $('.list-cards__wrap').removeClass('list');
        $('.product-grid-view').addClass('active');
        $('.product-list-view').removeClass('active');
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    });

    $('.menu__dropdown-col-title').on('click', function() {
        $('.menu__dropdown-inner').slideToggle();
    });

    $('.header__btn-menu').on('click', function() {
        $('.header__box').toggleClass('active');
    });
    // $('.user__name').on('click', function() {
    //     $('.user__menu').toggleClass('user__menu--off');
    // });

    // var containerEl = document.querySelector('.cards__inner');
    // var mixer;


    // if (containerEl) {
    //     mixer = mixitup(containerEl, {
    //         selectors: {
    //             control: '[data-mixitup-control]'
    //         },
    //         load: {
    //             filter: '.cards__inner'
    //         }
    //     });
    // }

    var mixer = mixitup('.cards__inner');

});