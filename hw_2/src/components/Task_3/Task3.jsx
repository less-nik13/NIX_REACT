import React, { Component } from 'react';
import Modal from "./Modal";

class Task3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpened: false
        };
    }

    openModal = (e) => {
        this.setState({
            isModalOpened: true
        });
    };

    closeModal = (e) => {
        this.setState({
            isModalOpened: false
        });
    };

    render() {
        return (
            <div className="task_3">
                <h2 className="title">Task 3</h2>
                <button className="open_modal" onClick={this.openModal}>Register</button>
                {this.state.isModalOpened && <Modal closeModal={this.closeModal}/>}
            </div>
        );
    }
}

export default Task3;