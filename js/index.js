$(document).ready(function () {
    $("#hide-1").click(function () {
        $("#p-1").hide(2000);
    });
    $("#hide-1-show").click(function () {
        $("#p-1").show(2000);
    });
});


$(document).ready(function () {
    $("#hide-2").click(function () {
        $("#p-2").toggle(2000);
    });
});





$(document).ready(function () {
    $("#text-color").click(function () {
        $("#p-3").css("color", "red");
    });
});

$(document).ready(function () {
    $("#bg-color").click(function () {
        $("#p-4").css({
            "color": "white",
            "background": "red"
        });
    });
});


$(document).ready(function () {
    $("#dbl-click").dblclick(function () {
        $("#p-5").hide(3000);
    });
});

$(document).ready(function () {
    $("#mouse-enter").mouseenter(function () {
        $("#p-6").hide(3000);
    });
    $("#mouse-lived").mouseleave(function () {
        $("#p-6").show(3000);
    });
});



$(document).ready(function () {
    $("h1#p-7").click(function () {
        $("h4").slideToggle(3000);
    });
});



$(document).ready(function () {
    $("#animet").click(function () {
        $("#box").animate({
            left:"650px",
            width:"220px",
            height:"220px",
            opacity:"0.1"
        });
    });
    
     $("#animet-stop").click(function () {
        $("#box").stop();
    });
    
});



$(document).ready(function(){
    $("span").parent().css({
        "color":"blue",
        "border":"3px solid green",
    });
});



