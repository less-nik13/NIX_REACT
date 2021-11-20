import React, { Component } from 'react';

class Input extends Component {
    render() {
        const { name, type, maxLength, value, handleChange } = this.props;
        return (
            <div className="form__group field">
                <input id={name}
                       className="form__field"
                       type={type}
                       name={name}
                       value={value}
                       onChange={handleChange}
                       placeholder={name.toUpperCase()}
                       maxLength={maxLength}
                       autoComplete="off"
                       required
                />
                <label className="form__label" htmlFor={name}>{name.toUpperCase()}</label>
            </div>
        );
    }
}

export default Input;