import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

// import Button from "../../components/Button/Button";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Oops! Looks like you got lost</p>
            <Button className="link" onClick={() => navigate(-1)}>
                Go Back
            </Button>
        </div>
    );
};

export default NotFound;