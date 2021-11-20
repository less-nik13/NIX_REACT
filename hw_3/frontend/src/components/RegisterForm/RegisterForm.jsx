import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Input from "../Input/Input";
import Button from "../Button/Button";
import { register } from "../../redux/actions/auth";
import { setAlert } from "../../redux/actions/alert";


const RegisterForm = () => {
    const [ userCredentials, setUserCredentials ] = useState({
        name: "",
        email: "",
        password: "",
        passwordVerify: "",
        policy: false

    });
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        });
    };

    const validateFormData = () => {
        const errorsHandler = {};
        const { name, email, password, passwordVerify, policy } = userCredentials;
        errorsHandler.name = (/^[A-Za-z]{2,15}$/gm).test(name) ? '' : 'Name required 2 or more symbols';
        errorsHandler.email = (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/).test(email) ? '' : 'Email is not valid';
        errorsHandler.password = password.length >= 8 ? '' : 'Password required 8 or more symbols';
        errorsHandler.passwordVerify = passwordVerify.length >= 8 ? '' : 'Password Verify required 8 or more symbols';
        errorsHandler.comparePasswords = password === passwordVerify ? '' : 'Passwords are not equal';
        errorsHandler.policy = !policy ? 'You must accept the policy' : '';

        const errorMessages = Object.values(errorsHandler).filter(el => el !== '');

        if(errorMessages.length) {
            dispatch(setAlert(errorMessages, 'error'));
        }

        return Object.values(errorsHandler).every(x => x === '');
    };

    const handleClick = (e) => {
        e.preventDefault();

        const { name, email, password } = userCredentials;

        const validateSuccess = validateFormData();

        if(validateSuccess) {
            dispatch(register({ name, email, password }, history));
        }
    };

    return (
        <form className="form">
            <Input name="name" type="text" handleChange={handleChange} value={userCredentials.name} maxLength="20"/>
            <Input name="email" type="email" handleChange={handleChange} value={userCredentials.email} maxLength="60"/>
            <Input name="password" type="password" handleChange={handleChange} value={userCredentials.password}
                   maxLength="20"/>
            <Input name="passwordVerify" type="password" handleChange={handleChange}
                   value={userCredentials.passwordVerify} maxLength="20" placeholder="Password verify"/>
            <div className="form__policy">
                <input name="policy" type="checkbox" onChange={handleChange} value={userCredentials.policy}/>
                <p className="form__policy-text">
                    I`ve read and accept the
                    <Link to="/policy" className="form__policy-link">
                        {''} Privacy Policy
                    </Link>
                </p>
            </div>
            <Button className="form__submit-button" type="submit" handleSubmit={handleClick}>
                Register
            </Button>
        </form>
    );
};

export default RegisterForm;
