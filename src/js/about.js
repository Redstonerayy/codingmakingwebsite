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
    //document.querySelector("main > .catchphrase-div > .catchphrase").setAttribute("style", "font-size: 50px");
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
    //document.querySelector("main > .catchphrase-div > .catchphrase").setAttribute("style", "font-size: 100px");
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
    //load html
    $("header").load("html/header.html", () => {
        //change menus
        if($(window).width() < 784){
            mobilemenu();
        }
    });

    $(".mobile-menu").load("html/mobile-menu.html", () => {
        //mobile menu show/hide
        $(".mobile-nav").on("click", () => {
            console.log("test");
            let navlinks = $(".mobile-nav-links")[0];
            console.log(navlinks);
            if(navlinks.style.display == "block"){
                navlinks.style.display = "none";
            } else {
                navlinks.style.display = "block";
            }
        });
    });

    $("footer").load("html/footer.html");
});

/* ------------------------------------------------
                   ONLOAD
                   
-------------------------------------------------*/

$(window).on("load", () => {
    $(".preloader").css("display","none");
    $(".page")[0].removeAttribute("hidden");
});


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

