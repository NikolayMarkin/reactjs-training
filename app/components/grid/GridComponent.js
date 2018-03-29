require("bootstrap/dist/css/bootstrap.css");
import React from "react";
import GridRecord from './GridRecord'
import {detailsRecords} from "../../data/dataStore";

class GridComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            records: []
        }
    }
    componentDidMount() {
        this.refs.filterInput && this.refs.filterInput.focus();
        this.setState({
            records: detailsRecords
        })
    }

    toggleActive(index) {
        let {records} = this.state;
        records[index].active = !records[index].active;
        this.setState({
            records: records
        })
    }

    editLastName(index, newValue) {
        let {records} = this.state;
        records[index].lastName = newValue;

        this.setState({
            records: records
        })
    }

    handleFilterChange(e){
        let value = e.target.value,
            records = detailsRecords.filter((record) => record.name.toUpperCase().includes(value.toUpperCase()));
        this.setState({
            records:records
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
                    {this.state.records.map((record, index) => {
                        return <GridRecord record={record} key={index}
                                           toggleActive={this.toggleActive.bind(this, index)}
                                           editLastName={this.editLastName.bind(this, index)}/>
                    })}
                    </tbody>
                </table>
                <div>{this.props.children &&
                    React.cloneElement(this.props.children, {records: this.state.records})}</div>
            </div>
        )
    }
}

export default GridComponent;