import React from 'react';
import { useHistory } from "react-router-dom";

import Button from "../../components/Button/Button";

const NotFound = () => {
    const history = useHistory();

    return (
        <div className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Oops! Looks like you got lost</p>
            <Button className="link" handleSubmit={() => history.goBack()} han>
                Go Back
            </Button>
        </div>
    );
};

export default NotFound;