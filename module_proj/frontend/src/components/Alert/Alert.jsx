import React from 'react';
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";

import CustomizedSnackbar from "../CustomizedSnackbar/CustomizedSnackbar";

const Alert = () => {
    const { alert, type, showAlert } = useSelector(state => state.alert);
    const matches = useMediaQuery('(max-width: 768px)');

    return ReactDOM.createPortal(
        <>
            {alert.length > 0 &&
                alert.map((message, index) =>
                    <CustomizedSnackbar vertical="top"
                                        horizontal={matches ? "right" : "center"}
                                        key={index}
                                        message={message}
                                        type={type}
                                        showAlert={showAlert}/>
                )
            }
        </>, document.body);
};

export default Alert;
