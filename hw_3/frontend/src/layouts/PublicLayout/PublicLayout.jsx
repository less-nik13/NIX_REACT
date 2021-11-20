import React from 'react';

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const PublicLayout = ({ children, withFooter = true }) => {
    return (
        <>
            <div className="header">
                <Navbar/>
            </div>
            <div className="main">
                <div className="container">
                    {children}
                </div>
            </div>
            {withFooter && <Footer/>}
        </>
    );
};

export default PublicLayout;