import React from 'react';
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ layout: Layout, component: Component, layoutProps, isAuthenticated, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            return (
                isAuthenticated ?
                    (<Layout layoutProps={layoutProps}>
                        <Component {...props} />
                    </Layout>) : (<Redirect to="/login"/>)
            );
        }
        }/>
    );
};

export default ProtectedRoute;