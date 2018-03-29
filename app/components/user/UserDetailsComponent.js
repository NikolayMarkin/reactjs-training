import UserSkillListComponent from "./UserSkillListComponent";

require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import UserAvatarComponent from './UserAvatarComponent'

class UserDetailsComponent extends React.Component {

    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                    <div className="well profile">
                        <div className="col-sm-12">
                            <div className="col-xs-12 col-sm-8">
                                <h2>{this.props.user.name}</h2>
                                <p><strong>About: </strong> {this.props.user.about} </p>
                                <p><strong>Hobbies: </strong> {this.props.user.hobbies} </p>
                                <UserSkillListComponent skills={this.props.user.skills}/>
                            </div>
                            <UserAvatarComponent avatar={this.props.user.avatar} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

UserDetailsComponent.defaultProps = {
    user: {
        name: "Nicole Pearson",
        about: "Web Designer/UI",
        hobbies: "Read, out with friends, listen to music, draw and learn new things.",
        skills: ["html5", "css3", "jquery", "bootstrap3"],
        avatar: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg"
    }
};

export default UserDetailsComponent;