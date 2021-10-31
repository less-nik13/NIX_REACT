import React, { Component } from 'react';

class SubmitButton extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <button className="form__submit-button" type="submit" onClick={handleSubmit}>Register</button>
        );
    }
}

export default SubmitButton;