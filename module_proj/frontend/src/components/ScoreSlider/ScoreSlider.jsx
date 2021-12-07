import React from 'react';
import { Box, Typography, Slider } from '@mui/material';

const RangeSlider = ({ score, setScore }) => {
    const newValue = (value) => {
        return value * 10;
    }

    return (
        <Box sx={{maxWidth: '200px'}}>
            <Typography variant="h5">
                User Score:
            </Typography>
            <Slider
                value={score}
                min={0}
                step={0.1}
                max={10}
                onChange={setScore}
                valueLabelDisplay="auto"
                scale={newValue}
            />
        </Box>
    );
}

export default RangeSlider;