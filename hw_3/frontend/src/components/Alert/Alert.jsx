import React from 'react';
import { useSelector } from "react-redux";

const Alert = () => {
    const { alert, type, showAlert } = useSelector(state => state.alert);

    return (
        <>
            {showAlert &&
            <div className="alert__content">
                {alert.map((message, index) => (<p key={index} className={`alert__message ${type}`}>{message}</p>))}
            </div>
            }
        </>
    );
};

export default Alert;