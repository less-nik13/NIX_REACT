import React from 'react';
import { Snackbar, Alert } from "@mui/material";

const CustomizedSnackbar = props => {
    const { vertical, horizontal, message, type, showAlert } = props;

    return (
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={showAlert}>
            <Alert severity={type} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
};

export default CustomizedSnackbar;