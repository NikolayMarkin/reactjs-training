import React from "react";

class UserAvatarComponent extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-4 text-center">
                <figure>
                    <img src={this.props.avatar} alt="" className="img-circle img-responsive"/>
                </figure>
            </div>
        )
    }
}

export default UserAvatarComponent;