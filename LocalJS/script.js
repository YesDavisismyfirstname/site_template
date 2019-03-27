$('document').ready (

    function() {
    $( "[class^='hmenu']").children("div").hover(function() {
        $(this).children("div").slideToggle("200")
    });

    $("[class^='toggle']").click(function() {
        $(this).prev("div").slideToggle("slow");
        $(this).toggleClass('rotate180');

    });
    
/*  
    $("#picpicker").children("a").click(function() {
        $("#frame").attr('src', function() {return "'" + $(this).text() + ".png'"});
    });
*/
});