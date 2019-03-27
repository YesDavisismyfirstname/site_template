$('document').ready (

// Style dropdown animation for all Menus with hmenu classes. 
// Assumes that the children relationships are structured using the default html formatting provided in index
    function() {
    $( "[class^='hmenu']").children("div").hover(function() {
        $(this).children("div").slideToggle(250)
    });

// Styles simple image toggle option. Any item with class of toggle should be placed 
// immediately following the div you wish to collapse.
    $("[class^='toggle']").click(function() {
        $(this).prev("div").slideToggle(250);
        $(this).toggleClass('rotate180');

    });
    
/*  
    $("#picpicker").children("a").click(function() {
        $("#frame").attr('src', function() {return "'" + $(this).text() + ".png'"});
    });
*/
});