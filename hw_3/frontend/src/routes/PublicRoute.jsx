import React from 'react';
import { Route } from "react-router-dom";

const PublicRoute = ({ layout: Layout, component: Component, layoutProps, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            return (
                <Layout {...layoutProps}>
                    <Component {...props} />
                </Layout>
            );
        }
        }/>
    );
};

export default PublicRoute;