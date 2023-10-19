 $(document).ready(function(){
    //MENU
    $('#nav-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    }); 

    //CAROUSEL INDEX
    $('.owl-carousel').owlCarousel({
        items:1,
        lazyLoad: true,
        loop:true,
        margin:10,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>']
    });

 });