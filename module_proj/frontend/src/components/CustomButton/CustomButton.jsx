import React from 'react';
import { Button } from "@mui/material";

const CustomButton = ({ children, className, onClick, startIcon, endIcon, sx }) => {
    return (
        <Button size="large"
                variant="outlined"
                className={className}
                onClick={onClick}
                startIcon={startIcon}
                endIcon={endIcon}
                sx={sx}>
            {children}
        </Button>
    );
};

export default CustomButton;
