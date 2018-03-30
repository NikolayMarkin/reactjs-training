require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import GridRecord from './GridRecord'
import {filterGrid, loadDataInGrid} from '../../actions'

class GridComponent extends React.Component {
    componentDidMount() {
        this.refs.filterInput && this.refs.filterInput.focus();
        this.loadData();
    }

    loadData() {
        let {dispatch} = this.props;
        dispatch(loadDataInGrid());
    }

    handleFilterChange(e) {
        const {dispatch} = this.props;
        dispatch(filterGrid(e.target.value));
    }

    render() {
        if (this.props.loading) {
            return (
                <div style={{width: 300, height: 300, padding: 20}}>Loading...</div>
            );
        }

        const recordsToShow = this.props.records
            .filter((record) => this.props.filtered.indexOf(record.id) == -1);

        return (
            <div style={{width: 300, height: 300, padding: 20}}>
                <p>
                    <input type="text" ref="filterInput" placeholder="Filter by..."
                           onChange={this.handleFilterChange.bind(this)}/>
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
                    {
                        recordsToShow.map(
                            (record, index) => <GridRecord record={record} key={index}/>
                        )
                    }
                    </tbody>
                </table>
                <div>{this.props.children &&
                React.cloneElement(this.props.children, {records: this.state.records})}</div>
            </div>
        )
    }
}

GridComponent.propTypes = {
    records: PropTypes.array.isRequired,
    filtered: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

export default GridComponent;