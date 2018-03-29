require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GridRecord from './GridRecord'

class GridComponent extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.refs.filterInput && this.refs.filterInput.focus();
    }

    handleFilterChange(e){
        let filterValue = e.target.value;

        let {dispatch} = this.props;

        dispatch({
            type: "FILTER",
            value: filterValue
        });
    }

    render() {
        return (
            <div style={{width: 300, height: 300, padding: 20}}>
                <p>
                    <input type="text" ref="filterInput" placeholder="Filter by..." onChange={this.handleFilterChange.bind(this)}/>
                </p>
                <table className="table table-condensed">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>About</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.records.map((record, index)=>{
                        return <GridRecord record={record} key={index}/>
                    })}
                    </tbody>
                </table>
                <div>{this.props.children &&
                    React.cloneElement(this.props.children, {records: this.state.records})}</div>
            </div>
        )
    }
}

GridComponent.propTypes = {
    records: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        records: state.grid
    }
}

export default connect(
    mapStateToProps
)(GridComponent)