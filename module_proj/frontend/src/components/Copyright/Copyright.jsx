import React from 'react';
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import useStyles from "./copyright.style";

const Copyright = (props) => {
    const classes = useStyles();
    return (
        <Typography variant="body2" color="common.neutral" align="center" {...props} className={classes.root}>
            {'Copyright © '}
            <Link to="/" className={classes.link}>
                removie
            </Link>{' '} by Nikita Podgorniy {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

export default Copyright;