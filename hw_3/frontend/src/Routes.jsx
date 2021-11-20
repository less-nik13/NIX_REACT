import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import PublicLayout from "./layouts/PublicLayout/PublicLayout";
import NotFound from "./pages/404/NotFound";
import Spinner from "./components/Spinner/Spinner";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const Task3 = React.lazy(() => import("./components/Task_3/Table"));
const LoginPage = React.lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage/RegisterPage'));
const TodoPage = React.lazy(() => import('./pages/TodoPage/TodoPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage/ProfilePage'));

function Routes() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Router>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <PublicRoute exact path="/task3" component={Task3} layout={PublicLayout}/>

                    <ProtectedRoute exact
                                    path="/"
                                    component={TodoPage}
                                    layout={PublicLayout}
                                    isAuthenticated={isAuthenticated}/>

                    <ProtectedRoute exact
                                    path="/profile"
                                    component={ProfilePage}
                                    layout={PublicLayout}
                                    isAuthenticated={isAuthenticated}/>

                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Suspense>
        </Router>
    );
}

export default Routes;
