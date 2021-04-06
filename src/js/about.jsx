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
/*
{
    "name": ,
    "profilepicture": ,
    "age": ,
    "grade": ,
    "githublink": ,
    "email": ,
    "discord": ,
    "projects": ,
    "knowledge": ,
}

*/


let developers = [
    {
        "name": "Anton", 
        "age": 16, 
        "grade": 10, 
        "githublink": "https://github.com/Redstonerayy", 
        "projects": "See github", 
        "knowledge": "Javascript, Electron, HTML, CSS"
    }
];

$(document).ready(() => {
    ReactDOM.render(<Developers developers={developers} />, document.querySelector(".developers"));
});
