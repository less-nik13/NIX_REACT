import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from 'formik';
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { register } from "../../redux/actions/auth";
import Copyright from "../../components/Copyright/Copyright";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

import useStyles from './registerPage.style';

const RegisterPage = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    useEffect(() => {
        if(isAuthenticated) {
            navigate('/');
        } // eslint-disable-next-line
    }, [ isAuthenticated ]);

    const registerValidation = yup.object().shape({
        name: yup.string().required("Username is required!").min(2, "Username must be at least 2 characters long!").max(25, "Username is too long!"),
        email: yup.string().required("Email is required!").email("Email is not valid!"),
        password: yup.string().min(8, "Password must be at least 8 characters!").max(50, 'Password is too long!').required("Password is required!"),
        passwordConfirm: yup.string().oneOf([ yup.ref("password") ], "Passwords do not match!").required("Password confirmation is required!")
    });

    const handleSubmit = (values) => {
        const { passwordConfirm, ...rest } = values;
        dispatch(register(rest, navigate));
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid item xs={false} sm={4} md={7}
                  sx={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1592438224611-fa028bc2c22c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: (t) =>
                          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                  }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'common.white', width: 60, height: 60 }}>
                        <LockOutlinedIcon sx={{ width: 40, height: 40 }}/>
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Sign Up
                    </Typography>
                    <Formik
                        initialValues={{ name: '', email: '', password: '', passwordConfirm: '' }}
                        validationSchema={registerValidation}
                        onSubmit={handleSubmit}
                        component={RegisterForm}
                    />
                    <Grid container justifyContent="center">
                        <Link to="/login" className={classes.link}>Already have an account? Sign in here.</Link>
                    </Grid>
                    <Copyright sx={{ mt: 5 }}/>
                </Box>
            </Grid>
        </Grid>
    );
};

export default RegisterPage;