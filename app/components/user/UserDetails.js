import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import UserDetailComponent from './UserDetailComponent';
import {filterDetails} from '../../actions'

class UserDetails extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(filterDetails(this.props.params.id));
    }

    componentDidUpdate(prevProps) {
        const {dispatch} = this.props;
        if (prevProps.params.id !== this.props.params.id) {
            dispatch({
                type: "FILTER_DETAILS",
                value: this.props.params.id
            })
        }
    }

    render() {
        return (
            <div>
                {this.props.details.map((detail, i) => {
                    return <UserDetailComponent key={i} user={detail}/>
                })}
            </div>
        )
    }
}

UserDetails.propTypes = {
    details: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        details: state.details
    }
}

export default connect(
    mapStateToProps
)(UserDetails)
