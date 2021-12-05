import * as React from 'react';
import { Box, Zoom, useScrollTrigger } from '@mui/material';

function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if(anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                sx={{ position: 'fixed', bottom: 75, right: 15 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}

export default ScrollTop;
