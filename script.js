    $(document).ready(function(){
        $("#circle").click(function(){
            $("#quote").slideToggle("slow");
            if ($("#circle").html() == '<span class="glyphicon glyphicon-chevron-down"></span>') 
            { 
                $("#circle").html("<span class='glyphicon glyphicon-chevron-up'></span>"); 
            } 
            else 
            { 
                $("#circle").html("<span class='glyphicon glyphicon-chevron-down'></span>"); 
            }; 
        });
        $(window).scroll(function() {
            $(".slideanim").each(function(){
                var pos = $(this).offset().top;
                var winTop = $(window).scrollTop();
                if (pos < winTop + 600) {
                    $(this).addClass("slide");
                }
            });
        });
    });