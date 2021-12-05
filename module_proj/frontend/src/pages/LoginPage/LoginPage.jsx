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

import { login } from "../../redux/actions/authActions";
import Copyright from "../../components/Copyright/Copyright";
import LoginForm from "../../components/LoginForm/LoginForm";

import useStyles from './loginPage.style';

const LoginPage = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    useEffect(() => {
        if(isAuthenticated) {
            navigate('/');
        } // eslint-disable-next-line
    }, [ isAuthenticated ]);

    const loginValidation = yup.object().shape({
        email: yup.string().required("Email is required!").email("Email is not valid!"),
        password: yup.string().min(8, "Password must be at least 8 characters!").max(50, 'Password is too long!').required("Password is required!"),
    });

    const handleSubmit = (values) => {
        console.log(values);
        dispatch(login(values, navigate))
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
                        my: 10,
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
                        Sign In
                    </Typography>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={loginValidation}
                        onSubmit={handleSubmit}
                        component={LoginForm}
                    />
                    <Grid container justifyContent="center">
                        <Link to="/register" className={classes.link}>New User? Sign up here.</Link>
                    </Grid>
                    <Copyright sx={{ mt: 5 }}/>
                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginPage;
