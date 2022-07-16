$(document).ready(function(){

    $(window).scroll(function(){
        // Nếu trên 100 sẽ hiện Button - Fadein
        if($(this).scrollTop() > 100){
            $('#topBtn').fadeIn();
            // Ngược lại
        } else{
            $('#topBtn').fadeOut();
        }
    });
    
    // Back to header 0 - Duration.
    $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0}, 100);
    });
});