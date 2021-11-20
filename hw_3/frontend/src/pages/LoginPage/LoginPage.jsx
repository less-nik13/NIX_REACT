import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";

const LoginPage = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const history = useHistory();

    useEffect(() => {
        if(isAuthenticated) {
            history.push('/');
        } // eslint-disable-next-line
    }, [ isAuthenticated ]);

    return (
        <div className="form__wrapper">
            <div className="form__inner">
                <PageTitle>Login</PageTitle>
                <LoginForm/>
                <Link to="/register" className="form__link">New User? Sign up here.</Link>
            </div>
        </div>
    );
};

export default LoginPage;