/* --------------------------------------------------------------------
-----------------------------------------------------------------------
                   MAIN CODE
                   
                   
-----------------------------------------------------------------------
---------------------------------------------------------------------*/

/* ------------------------------------------------
                   ONREADY
                   
-------------------------------------------------*/
$(document).ready(() => {
    //slideshow
    var mainslideshow = new slideshow(
        [
        ["img/python800px.png", "Python", null],
        ["img/electronlogo1200px.png", "Electron", null],
        ["img/githublogo1600pxdark.png", "Github", null]
        ],
        document.querySelector(".technology-slide-show"),
        document.getElementById("prev"),
        document.getElementById("next"),
        true
    );
    mainslideshow.setslide(0);
});
