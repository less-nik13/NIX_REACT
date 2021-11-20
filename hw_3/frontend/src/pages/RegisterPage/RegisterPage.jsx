import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import RegisterForm from "../../components/RegisterForm/RegisterForm";
import PageTitle from "../../components/PageTitle/PageTitle";

const RegisterPage = () => {
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
                <PageTitle>Register</PageTitle>
                <RegisterForm/>
                <Link to="/login" className="form__link">Already have an account? Sign in here.</Link>
            </div>
        </div>
    );
};

export default RegisterPage;