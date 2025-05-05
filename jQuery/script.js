(function($){
    $(function(){


/*********Mobile navigation**********/
        $(".jq-nav-icon").click(function(){
            $(".nav-background").fadeToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
        });

        $(".jq--image-hamburger").click(function(){

            if($(".jq--image-hamburger").attr("src") == "obrazky/hamburgerMenu.png")
            {
                $($(".jq--image-hamburger").attr("src", "obrazky/crossMenu.png"));
            }   
            else
            {
                $($(".jq--image-hamburger").attr("src","obrazky/hamburgerMenu.png"));
            }
        })
    });


})(jQuery);