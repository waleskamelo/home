 $(document).ready(function(){
    /*----- MENU -----*/
    $('#nav-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    });
 });