require("bootstrap/dist/css/bootstrap.css");
import React from "react";

class UserSkillComponent extends React.Component {
    render() {
        return (
            <span className="tags">{this.props.skill}</span>
        )
    }
}

class UserSkillListComponent extends React.Component {
    render() {
        return (
            <p><strong>Skills: </strong>
                {this.props.skills.map((skill, index) => {
                    return <UserSkillComponent skill={skill} key={index}/>
                })}
            </p>
        )
    }
}

export default UserSkillListComponent;