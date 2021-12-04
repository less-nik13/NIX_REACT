import React from 'react';
import { Box, Container } from "@mui/material";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const PublicLayout = ({ children, withFooter = true }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar/>
            <Container component="main" sx={{ mt: 11, mb: 2, flex: '1 0 auto' }} maxWidth="xl">
                {children}
            </Container>
            {withFooter && <Footer/>}
        </Box>
    );
};

export default PublicLayout;
