import React from 'react';
import { Snackbar, Alert } from "@mui/material";

const CustomizedSnackbar = props => {
    const { vertical, horizontal, message, type, showAlert } = props;

    return (
        <Snackbar sx={{marginTop: '60px'}} anchorOrigin={{ vertical, horizontal }} open={showAlert}>
            <Alert severity={type} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
};

export default CustomizedSnackbar;