require("bootstrap/dist/css/bootstrap.css");
import UserSkillListComponent from "./UserSkillListComponent";
import React from "react";
import UserAvatarComponent from './UserAvatarComponent'
import {detailsRecords} from '../../data/dataStore'

class UserDetailComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            user: undefined
        }
    }

    componentDidMount() {
        const id = this.props.params.id;
        const user = detailsRecords.find(user => user.id == id);

        this.setState(
            {user: user}
        )
    }

    render() {
        if (this.state.user === undefined) {
            return (<div>404</div>)
        }
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                    <div className="well profile">
                        <div className="col-sm-12">
                            <div className="col-xs-12 col-sm-8">
                                <h2>{this.state.user.name}</h2>
                                <p><strong>About: </strong> {this.state.user.about} </p>
                                <p><strong>Hobbies: </strong> {this.state.user.hobby} </p>
                                <UserSkillListComponent skills={this.state.user.skills}/>
                            </div>
                            <UserAvatarComponent avatar={this.state.user.avatar} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

UserDetailComponent.defaultProps = {
    user: {
        name: "N/A",
        about: "Web Designer/UI",
        hobbies: "Read, out with friends, listen to music, draw and learn new things.",
        skills: ["html5", "css3", "jquery", "bootstrap3"],
        avatar: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg"
    }
};

export default UserDetailComponent;