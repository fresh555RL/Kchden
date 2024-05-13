    var styleProps = $("#b1ton" ).css([ "width", "height", "color", "background-color" ]);
    console.log(styleProps);
    $(document).ready(function(){

        $("#b1ton").click(function(){

        $("#b1ton p").toggle();
        });


        $("#f").click(function(){
            $("#f").before($("#s"));
        });
        $("#s").click(function(){
            $("#s").after($("#f"));
        });
        $( "#foo" ).bind( "mouseenter ", function() {
            $( this ).toggleClass( "entered" );
            $(this).text("Пиздец... забеременела");
        });
        $( "#foo" ).bind( "mouseleave", function() {
            $( this ).toggleClass( "entered" );
            $(this).text("Жду алименты...");
        });

        var styleProps = $("#b1ton").css("width");
        console.log(styleProps);
        //   $("button").click(function(){
        //     // console.log($(this).css());


        //   });
    });
