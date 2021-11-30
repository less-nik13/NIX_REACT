import React from 'react';
import { useSelector } from "react-redux";

import useStyles from "./alert.style";

const Alert = () => {
    const { alert, type, showAlert } = useSelector(state => state.alert);
    const classes = useStyles();

    return (
        <>
            {showAlert &&
                <div className={classes.root}>
                    {alert.map((message, index) => (
                        <p key={index} className={`${classes.message} ${classes[type]}`}>{message}</p>))}
                </div>
            }
        </>
    );
};

export default Alert;
