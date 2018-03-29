import React from "react";
import {hashHistory} from 'react-router'

class GridRecord extends React.Component {
    showUserDetails(e){
        e.preventDefault();
        hashHistory.push(`/details/${this.props.record.id}`);
    }

    render() {
        const record = this.props.record;
        return <tr>
            <th onClick={this.showUserDetails.bind(this)}><a href="#">{record.id}</a></th>
            <th>{record.name}</th>
            <th>{record.about}</th>
        </tr>
    }
}

export default GridRecord;