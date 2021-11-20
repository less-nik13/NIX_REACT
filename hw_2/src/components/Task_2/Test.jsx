import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: props.inputValue
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.inputValue !== nextProps.inputValue) {  //  Если данные поменялись, то мы поменяем состояние
            return { // возвращаем новое состояние
                inputValue: nextProps.inputValue
            }
        }
        // Если данные не поменялись, то состояние не меняем
        return null;
    }

    render() {
        const {trigger, inputValue, handleClick} = this.props;
        return (
            <div>
                <h2 className="title">Task 2</h2>
                <input type="text" value={inputValue} readOnly/>
                <button onClick={(e) => handleClick(e, trigger)}>Add +1</button>
            </div>
        );
    }
}

export default Test;