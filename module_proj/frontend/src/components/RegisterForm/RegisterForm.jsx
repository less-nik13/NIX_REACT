import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const RegisterForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
    return (
        <Box component="form" noValidate sx={{ mt: 1, width: '100%' }} onSubmit={handleSubmit}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="name"
                autoComplete="username"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="confirm-current-password"
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
                helperText={touched.passwordConfirm && errors.passwordConfirm}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 3, bgcolor: 'info.main' }}
            >
                Sign Up
            </Button>
        </Box>
    );
};

export default RegisterForm;