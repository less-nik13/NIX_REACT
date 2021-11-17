import React from 'react';

const Button = ({ children, type, className, handleSubmit }) => {
    return (
        <button className={className} type={type ?? "button"} onClick={handleSubmit}>
            {children}
        </button>
    );
};

export default Button;