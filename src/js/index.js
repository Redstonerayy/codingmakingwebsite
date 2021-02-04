/* --------------------------------------------------------------------
-----------------------------------------------------------------------
                   FUNCTIONS, LIBS and other STUFF
                   
                   
-----------------------------------------------------------------------
---------------------------------------------------------------------*/

/* ------------------------------------------------
                   SLIDESHOW
                   
-------------------------------------------------*/


function slideshow(slidedata, slideshowcontainer, elementprev, elementnext, dots=false, isobject=false){
    //get ref
    if(slideshowcontainer.id != ""){
        var ref = "#" + slideshowcontainer.id;
    } else {
        var ref = "." + slideshowcontainer.className.split(" ")[0];
    }
    //make slides
    this.slides = [];
    if(isobject){
        slidedata.forEach((item, i) => {
            this.slides.push([item.imagepath, item.caption, item.index]);
        });
    } else {
        slidedata.forEach((item, i) => {
            this.slides.push(item);
        });
    }
    this.currentslide = 0;
    this.slidenumber = this.slides.length;
  
    //create slideshow
    let currslide = document.createElement("div");
    currslide.className = "slideshow";
  
    let slideimg = document.createElement("img");
    slideimg.className = "slideimg";
    let caption = document.createElement("div");
    caption.className = "caption";
    let numbertext = document.createElement("div");
    numbertext.className = "numbertext";
  
    currslide.appendChild(numbertext);
    currslide.appendChild(slideimg);
    currslide.appendChild(caption);
    slideshowcontainer.appendChild(currslide);
  
    //make eventlisteners
    elementprev.addEventListener("click", () => {
        this.currentslide -= 1;
        if(this.currentslide < 0){
            this.currentslide = this.slides.length - 1;
        }
        this.setslide(this.currentslide);
    });
  
    elementnext.addEventListener("click", () => {
        this.currentslide += 1;
        if(this.currentslide > (this.slides.length - 1)){
            this.currentslide = 0;
        }
        this.setslide(this.currentslide);
    });
  
    //methods
    this.setslide = (index) => {
        document.querySelector(ref + " > " + ".slideshow" + " > " + ".slideimg").src = this.slides[index][0];
        if(this.slides[index][1] != null){
            document.querySelector(ref + " > " + ".slideshow" + " > " + ".caption").innerHTML = this.slides[index][1];
        } else {
            document.querySelector(ref + " > " + ".slideshow" + " > " + ".caption").innerHTML = "";
        }
        if(this.slides[index][2] != null){
            document.querySelector(ref + " > " + ".slideshow" + " > " + ".numbertext").innerHTML = this.slides[index][2];
        } else {
            document.querySelector(ref + " > " + ".slideshow" + " > " + ".numbertext").innerHTML = "";
        }
  
        try {
            let activedot = document.querySelector(ref + " > " + ".dots" + " > " + ".active-slideshow-dot");
            activedot.className = activedot.className.replace(" active-slideshow-dot", "");
        } catch (e) {
        }
        let alldots = document.querySelectorAll(ref + " > " + ".dots" + ">" + ".slideshow-dot");
        let search = (index).toString();
        for (let i = 0; i < alldots.length; i++) {
            if(alldots[i].className.includes(search)){
                alldots[i].className += " active-slideshow-dot";
            }
        }
    }
  
    this.createdot = (parent, index) => {
        let dot = document.createElement("span");
        dot.className = "slideshow-dot" + " " + (index).toString();
        dot.addEventListener("click", () => {
            this.setslide(index);
        });
        parent.appendChild(dot);
    }
  
    //make dots after createdot method
    if(dots){
        let dotcontainer = document.createElement("div");
        dotcontainer.className = "dots";
        this.slides.forEach((item, i) => {
            this.createdot(dotcontainer, i)
        });
        slideshowcontainer.appendChild(dotcontainer);
    }
}

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
    document.querySelector("main > .catchphrase-div > .catchphrase").setAttribute("style", "font-size: 50px");
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
    document.querySelector("main > .catchphrase-div > .catchphrase").setAttribute("style", "font-size: 100px");
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
})
