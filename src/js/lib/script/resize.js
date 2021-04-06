/* ------------------------------------------------
                   MOBILE MENU
                   
-------------------------------------------------*/

function mobilemenu() {
    //hide desktop nav
    document.querySelector(".mainnav").setAttribute("hidden", "");
    document.querySelectorAll(".mainnav > a").forEach(element => {
        element.setAttribute("hidden", "");
    });
    //show mobile nav
    document.querySelector(".mobile-nav").removeAttribute("hidden", "");
    document.querySelector(".mobile-nav > *").removeAttribute("hidden", "");
    //decrease catchphrase fontsize
    try {
        document.querySelector("main > .catchphrase-div > .catchphrase").setAttribute("style", "font-size: 50px");
    } catch (e) {
        // No need to change main fontsize
    }    
}

function desktopmenu() {
    //show desktop nav
    document.querySelector(".mainnav").removeAttribute("hidden", "");
    document.querySelectorAll(".mainnav > a").forEach(element => {
        element.removeAttribute("hidden", "");
    });
    //hide mobile nav
    document.querySelector(".mobile-nav").setAttribute("hidden", "");
    document.querySelector(".mobile-nav > *").setAttribute("hidden", "");
    //increase catchphrase fontsize
    try {
        document.querySelector("main > .catchphrase-div > .catchphrase").setAttribute("style", "font-size: 100px");
    } catch (e) {
        // No need to change main fontsize"
    } 
}

/* --------------------------------------------------------------------
-----------------------------------------------------------------------
                   MAIN CODE
                   
                   
-----------------------------------------------------------------------
---------------------------------------------------------------------*/

/* ------------------------------------------------
                   ONREADY
                   
-------------------------------------------------*/

$(document).ready(() => {
    $(".preloader").css("display","none");
    $(".page")[0].removeAttribute("hidden");

    if($(window).width() < 784){
        mobilemenu();
    }

    $(".mobile-nav").on("click", () => {
        let navlinks = $(".mobile-nav-links")[0];
        if(navlinks.style.display == "block"){
            navlinks.style.display = "none";
        } else {
            navlinks.style.display = "block";
        }
    });
});

/* ------------------------------------------------
                   ONLOAD
                   
-------------------------------------------------*/
//be careful when using React
//then onload is different and u are stuck in loading screen
/* ------------------------------------------------
                   DEFAULT
                   
-------------------------------------------------*/
$(window).bind("resize", () => {
    if($(window).width() < 784){
        mobilemenu();
    } else {
        desktopmenu();
    }
});
