import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import useStyles from "./notFound.style";

const NotFound = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h1">404</Typography>
            <Typography sx={{textAlign: 'center', margin: '25px 15px'}} variant="h4" my={3}>Oops! Looks like you got lost
                🤔</Typography>
            <Button className={classes.button} size='large' sx={{padding: '10px 20px', fontSize: '16px'}} variant="outlined" onClick={() => navigate(-1)} startIcon={<KeyboardBackspaceIcon/>}>
                Go Back
            </Button>
        </Box>
    );
};

export default NotFound;