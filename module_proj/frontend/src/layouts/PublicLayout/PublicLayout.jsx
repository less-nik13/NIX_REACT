import React from 'react';
import { Box, Container, Toolbar, Fab } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ScrollTop from "../../components/ScrollTopButton/ScrollTopButton";

const PublicLayout = ({ children, withFooter = true, navbarBg, withContainer = true }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar bgColor={navbarBg}/>
            {withContainer ?
                <Container component="main" sx={{ mt: 11, mb: 2, flex: '1 0 auto' }} maxWidth="xl">
                    <Toolbar id="back-to-top-anchor"/>
                    {children}
                </Container> : <>{children}</>}
            <ScrollTop>
                <Fab color="primary" size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </ScrollTop>
            {withFooter && <Footer/>}
        </Box>
    );
};

export default PublicLayout;
