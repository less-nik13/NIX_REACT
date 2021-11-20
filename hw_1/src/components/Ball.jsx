import React, { Component } from 'react';

class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }

    moveBall = () => {
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }));
    };

    render() {
        return (
            <div className={this.state.isClicked ? 'ball active' : 'ball'} onClick={this.moveBall}>
            </div>
        );
    }
}

export default Ball;