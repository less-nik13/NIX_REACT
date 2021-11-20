import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { login } from "../../redux/actions/auth";
import { setAlert } from "../../redux/actions/alert";

const LoginForm = () => {
    const [ userCredentials, setUserCredentials ] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        });
    };

    const validateFormData = () => {
        const errorsHandler = {};
        const { email, password } = userCredentials;

        errorsHandler.email = (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/).test(email) ? '' : 'Email is not valid';
        errorsHandler.password = password.length >= 8 ? '' : 'Password required 8 or more symbols';

        const errorMessages = Object.values(errorsHandler).filter(el => el !== '');

        if(errorMessages.length) {
            dispatch(setAlert(errorMessages, 'error'));
        }

        return Object.values(errorsHandler).every(err => err === '');
    };

    const handleClick = (e) => {
        e.preventDefault();

        const { email, password } = userCredentials;
        const validateSuccess = validateFormData();

        if(validateSuccess) {
            dispatch(login({ email, password }, history));
        }
    };

    return (
        <form className="form">
            <Input name="email" type="email" handleChange={handleChange} value={userCredentials.email}
                   maxLength="60"/>
            <Input name="password" type="password" handleChange={handleChange} value={userCredentials.password}
                   maxLength="20"/>
            <Button className="form__submit-button" type="submit" handleSubmit={handleClick}>
                Login
            </Button>
        </form>
    );
};

export default LoginForm;