require("bootstrap/dist/css/bootstrap.css");
import UserSkillListComponent from "./UserSkillListComponent";
import React from "react";
import UserAvatarComponent from './UserAvatarComponent'

class UserDetailComponent extends React.Component {

    render() {
        const {user} = this.props;
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                    <div className="well profile">
                        <div className="col-sm-12">
                            <div className="col-xs-12 col-sm-8">
                                <h2>{user.name}</h2>
                                <p><strong>About: </strong> {user.about} </p>
                                <p><strong>Hobbies: </strong> {user.hobby} </p>
                                <UserSkillListComponent skills={user.skills}/>
                            </div>
                            <UserAvatarComponent avatar={user.avatar} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default UserDetailComponent;