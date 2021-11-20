import React, { Component } from 'react';
import Form from "./components/Form";
import Ball from "./components/Ball";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Form/>
                <h2>Task 2: Ball</h2>
                <Ball />
            </div>
        );
    }
}

export default App;
