$(function(){
        //NavScroll change color
        $(window).on('scroll',function(){
            var scroll = $(window).scrollTop();
            if (scroll > 50) {
              $("nav").addClass("bg-dark");
            }
      
            else{
                $("nav").removeClass("bg-dark");  	
            }
        })
        
        //Animate button and links
        $('.plan-button').hover(function(e){
            $(this.parentNode).addClass("shadow-lg")
        },function(){
            $(this.parentNode).removeClass("shadow-lg")
        })
        
    })