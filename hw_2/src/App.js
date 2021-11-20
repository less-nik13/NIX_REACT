import React, { Component } from 'react';
import Range from "./components/Task_1/Range";
import Test from "./components/Task_2/Test";
import Task3 from "./components/Task_3/Task3";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 1
        }
    }

    handleClick = (e, trigger) => {
        if(this.state.inputValue < trigger) {
            this.setState((prevState) => ({
                inputValue: +prevState.inputValue + 1
            }))
        }
        return;
    }

    render() {
        return (
            <div className="container">
                <Range/>
                <Test trigger="15" inputValue={this.state.inputValue} handleClick={this.handleClick}/>
                <Task3 />
            </div>
        );
    }
}

export default App;
