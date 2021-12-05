import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Skeleton,
    Stack,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    TableCell,
    Paper, Table
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import { logout } from "../../redux/actions/authActions";
import CustomButton from "../../components/CustomButton/CustomButton";

import useStyles from './profilePage.style';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const navigate = useNavigate();
    const { currentUser } = useSelector(state => state.auth);

    const handleClick = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <Box className={classes.wrapper}>
            <Paper elevation={0} variant={'outlined'} className={classes.inner}>
                {currentUser ? <>
                    <Typography sx={{ textAlign: 'center' }}>
                        <AccountCircleIcon sx={{ fontSize: '120px' }}/>
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.header}>Account info</TableCell>
                                    <TableCell align="right">
                                        <CustomButton className={classes.button} onClick={handleClick}
                                                      endIcon={<LogoutIcon/>}>
                                            Logout
                                        </CustomButton>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell className={classes.identifier} align="left">Id</TableCell>
                                    <TableCell align="right">{currentUser.id}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.identifier} align="left">Username</TableCell>
                                    <TableCell align="right">{currentUser.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.identifier} align="left">Email</TableCell>
                                    <TableCell align="right">{currentUser.email}</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell className={classes.identifier} align="left">Date of register</TableCell>
                                    <TableCell align="right">{currentUser.createdAt}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </> : <Stack spacing={1}>
                    <Skeleton variant="circular" width={100} height={100}/>
                    <Skeleton variant="text" height={50}/>
                    <Skeleton variant="text" height={50}/>
                    <Skeleton variant="text" height={50}/>
                    <Skeleton variant="text" height={50}/>
                    <Skeleton variant="text" height={50}/>
                </Stack>
                }
            </Paper>
        </Box>
    );
};

export default ProfilePage;
