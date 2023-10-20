 $(document).ready(function(){
    //MENU
    $('#nav-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    }); 

    //CAROUSEL INDEX
    $('#carousel_main').owlCarousel({
        items:1,
        lazyLoad: true,
        loop:true,
        margin:10,
        nav: true,
        navSpeed: 1500,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        dotsSpeed:1500,
        autoplay: false,
        autoplaySpeed: 1500,
        responsiveRefreshRate: 10
    });

 });