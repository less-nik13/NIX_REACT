import React from 'react';
import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <CircularProgress size={120} />
        </Box>
    );
};

export default Spinner;