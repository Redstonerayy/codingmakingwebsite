/* ------------------------------------------------
                   SLIDESHOW CLASS
                   
-------------------------------------------------*/

function slideshow(slidedata, slideshowcontainer, elementprev, elementnext, dots=false, isobject=false){
    //get ref
    var ref;
    if(slideshowcontainer.id != ""){
        ref = "#" + slideshowcontainer.id;
    } else {
        ref = "." + slideshowcontainer.className.split(" ")[0];
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
