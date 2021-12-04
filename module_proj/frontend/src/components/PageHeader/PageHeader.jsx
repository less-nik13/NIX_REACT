import React from 'react';
import { Box, Typography } from "@mui/material";

import useStyles from './pageHeader.style'

const PageHeader = ({title}) => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.title} variant="h3">{title}</Typography>
        </Box>
    );
};

export default PageHeader;