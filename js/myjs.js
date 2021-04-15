$(function(){
        //NavScroll change color
        $(window).on('scroll',function(){
            var scroll = $(window).scrollTop();
            if (scroll > 100) {
              $("nav").addClass("nav");
            }
      
            else{
                $("nav").removeClass("nav");  	
            }
        })
        
        //Animate button and links
        $('.plan-button').hover(function(e){
            $(this.parentNode).addClass("shadow-lg")
        },function(){
            $(this.parentNode).removeClass("shadow-lg")
        })
        
    })