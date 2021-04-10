/* ------------------------------------------------
                   GET DATA
                   AND SHOW
-------------------------------------------------*/

var projectcontainer = document.querySelector(".projects-container");
var frame = document.querySelector(".frame");

function addProject(name) {
    //container
    let project = document.createElement("div");
    project.className = `project`;
    project.id = name;
    //text
    let text = document.createElement("p");
    text.id = name;
    text.innerHTML = name;
    //appends
    project.appendChild(text);
    project.addEventListener('click', (ev) => {
        //update visuals
        document.querySelectorAll(".project").forEach((project, index) => {
            if(project.className.includes(" active")){
                project.className = project.className.replace(" active", "");
            }
            if(project.id.includes(ev.target.id)){
                project.className += " active";
            }
        });

        //
        sorted.forEach(element => {
            if(ev.target.id == element[1]){
                //$(".projects").load("projects/" + element[0]);
                frame.src = "projects/" + element[0];
            }
        });
    })
    projectcontainer.appendChild(project);
}

//request
var sorted = []
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //prepare data
        let data = JSON.parse(this.responseText);
        for (let i = 0; i < data[0].length; i++) {
            sorted.push([
                data[0][i],
                data[1][i]
            ])
        }

        //show data
        sorted.forEach(project => {
            addProject(project[1]);
        });
    }
};

xmlhttp.open("GET", "request.php", true);
xmlhttp.send();

//initial load
//$(".projects").load('projects/projects.html');
frame.src = "projects/projects.html";

document.querySelector(".headline-projects").addEventListener('click', (ev) => {
    //$(".projects").load('projects/projects.html');    
    frame.src = "projects/projects.html";    
    document.querySelectorAll(".project").forEach((project, index) => {
        if(project.className.includes(" active")){
            project.className = project.className.replace(" active", "");
        }
    });
});
