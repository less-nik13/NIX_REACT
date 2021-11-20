import React from 'react';

const Input = (props) => {
    const { name, type, maxLength, value, handleChange, placeholder } = props;

    return (
        <div className="input__wrapper">
            <div className="form__group field">
                <input id={name}
                       className="form__field"
                       type={type}
                       name={name}
                       value={value}
                       onChange={handleChange}
                       placeholder={!placeholder ? name.toUpperCase() : placeholder.toUpperCase()}
                       maxLength={maxLength}
                       autoComplete="off"
                />
                {type !== 'checkbox' &&
                <label className="form__label"
                       htmlFor={name}>{!placeholder ? name.toUpperCase() : placeholder.toUpperCase()}</label>
                }
            </div>
        </div>
    );
};

export default Input;
