import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import CustomButton from "../../components/CustomButton/CustomButton";

import useStyles from "./notFound.style";

const NotFound = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <Box className={classes.root}>
            <Typography variant="h1">404</Typography>
            <Typography className={classes.message} variant="h4" my={3}>
                Oops! Looks like you got lost 🤔
            </Typography>
            <CustomButton className={classes.button}
                          onClick={handleClick}
                          startIcon={<KeyboardBackspaceIcon/>}
                          sx={{ padding: '10px 20px', fontSize: '16px' }}
            >
                Go Back
            </CustomButton>
        </Box>
    );
};

export default NotFound;