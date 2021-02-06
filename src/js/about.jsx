'use strict';

/* ------------------------------------------------
                   REACT COMPONENTS
                   
-------------------------------------------------*/

class Developers extends React.Component {
    render(){
        return(
            <React.Fragment>
                {this.props.developers.map(developer => (
                    <DeveloperProfile key={developer["name"]} {...developer} />
                ))}
            </React.Fragment>
        )
    }
}


class DeveloperProfile extends React.Component {
    render(){
        return(
            <div class="developer-profile">
                <img class="profile-picture" src="img/python800px.png" alt=""></img>
                <div class="description">
                    <div class="developer-info">
                        <ul>
                            <li>Name: {this.props.name}</li>
                            <li>Alter: {this.props.age}</li>
                            <li>Klasse: {this.props.grade}</li>
                            <li class="github">Github: <a href={this.props.githublink}>{this.props.githublink}</a></li>
                            <li>E-Mail: {this.props.email}</li>
                            <li>Discord: {this.props.discord}</li>
                            <li>Projekte: {this.props.projects}</li>
                            <li>Kenntnisse: {this.props.knowledge}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

/* ------------------------------------------------
                   MAIN CODE
                   
-------------------------------------------------*/

$(document).ready(() => {
    console.log("a");
});

let developers = [
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "email": "", "discord": "", "projects": "this site", "knowledge": "infinite"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "infinite"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "infinite"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "infinite"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "infinite"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "infinite"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "infinite"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "infinite"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "infinite"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "infinite"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "infinite"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "infinite"}
];

ReactDOM.render(<Developers developers={developers} />, document.querySelector(".developers"));