import React from 'react';
import { connect } from 'react-redux'
import UserDetails from '../components/user/UserDetails'

let UserDetailsContainer = class extends React.Component {
    render(){
        return <UserDetails {...this.props}/>
    }
};

function mapStateToProps(state) {
    return {
        details: state.details.records
    }
}

export default connect(
    mapStateToProps
)(UserDetailsContainer)
