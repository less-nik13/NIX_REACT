import React from 'react';
import { useSelector } from "react-redux";

import CustomizedSnackbar from "../CustomizedSnackbar/CustomizedSnackbar";

const Alert = () => {
    const { alert, type, showAlert } = useSelector(state => state.alert);

    return (
        <>
            {alert.length > 0 &&
                alert.map((message, index) =>
                    <CustomizedSnackbar key={index} message={message} vertical="top" horizontal="center" type={type}
                                        showAlert={showAlert}/>
                )
            }
        </>
    );
};

export default Alert;
