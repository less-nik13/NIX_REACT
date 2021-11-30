import React from 'react';
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ layout: Layout, element: Component, layoutProps, isAuthenticated, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            return (
                isAuthenticated ?
                    (<Layout layoutProps={layoutProps}>
                        <Component {...props} />
                    </Layout>) : (<Navigate to="/login"/>)
            );
        }
        }/>
    );
};

export default ProtectedRoute;