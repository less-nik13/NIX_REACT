import React, { Component } from 'react';

class Range extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rangeValue: 1
        }
    }

    handleRangeChange = (e) => {
        this.setState({
            rangeValue: e.target.value
        })
    }

    render() {
        return (
            <div className="task_1">
                <h2 className="title">Task 1</h2>
                <input type="range" defaultValue="1" step="1" min="1" max="100" value={this.state.value} onChange={this.handleRangeChange}/>
                <input type="text" value={this.state.rangeValue} readOnly/>
            </div>
        );
    }
}

export default Range;