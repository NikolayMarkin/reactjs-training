import React from "react";
import PropTypes from 'prop-types';

class GridRecord extends React.Component {

    handleLastNameChange(e){
        this.props.editLastName(e.target.value);
    }

    render() {
        let {record} = this.props;
        return <tr>
            <th>{record.firstName}</th>
            <th><input type="text" defaultValue={record.lastName} onChange={this.handleLastNameChange.bind(this)}/></th>
            <th><input type="checkbox" checked={record.active} onChange={this.props.toggleActive}/></th>
        </tr>
    }
}

GridRecord.defaultProps = {
    record: {firstName: "N/A", lastName: "N/A", active: false}
};

GridRecord.propTypes = {
    record: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
    })
};

export default GridRecord;