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
            <div className="developer-profile">
                <img className="profile-picture" src={this.props.profilepicture ? this.props.profilepicture : "img/python800px.png"} alt=""></img>
                <div className="description">
                    <div className="developer-info">
                        <ul>
                            <li>Name: {this.props.name}</li>
                            <li>Alter: {this.props.age}</li>
                            <li>Klasse: {this.props.grade}</li>
                            <li className="github">Github: <a href={this.props.githublink}>{this.props.githublink}</a></li>
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

let developers = [
    {"name": "anton", "profilepicture": "img/python800px.png", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "email": "sdf", "discord": "asdf", "projects": "this site", "knowledge": "1"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "2"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "3"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "4"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "5"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "6"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "7"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "8"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "9"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "10"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "11"},
    {"name": "anton", "age": 12, "grade": 10, "githublink": "https://github.com/Redstonerayy", "projects": "this site", "knowledge": "12"}
];

$(document).ready(() => {
    ReactDOM.render(<Developers developers={developers} />, document.querySelector(".developers"));
});
