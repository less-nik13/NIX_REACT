import React, { Component } from 'react';

class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
    }

    moveBall = (e) => {
        if(!this.state.isClicked) {
            e.target.style.transform = 'translateX(500px)';
            this.setState({isClicked: !this.state.isClicked})
        } else {
            e.target.style.transform = 'translateX(0)';
            this.setState((prevState) => ({ isClicked: !prevState }))
        }
    }

    render() {
        return (
            <div className="ball" onClick={this.moveBall}></div>
        );
    }
}

export default Ball;