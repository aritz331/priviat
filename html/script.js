/*$(window).on("load", function(){
    //$("body").css("background-color", "black")
    document.getElementById('video').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        $("#intro").fadeOut()
    }
    var img = new Image();
        img.src = "https://source.unsplash.com/random/7680x4320";
        //$("body").css("background-color", "#202020")
        img.onload = function() {
            $("body").css("background", "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(" + img.src + ")")
            hide()
        }
});
*/
hide = function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
}

window.onload = function () {
    hide()
    $("#intro").fadeOut()
}