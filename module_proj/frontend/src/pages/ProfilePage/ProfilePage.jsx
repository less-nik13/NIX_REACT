import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Box, Button,
    Skeleton,
    Stack,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import { getUser, logout } from "../../redux/actions/auth";

import useStyles from './profilePage.style';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { currentUser } = useSelector(state => state.auth);

    useEffect(() => {
        if(!currentUser) {
            dispatch(getUser());
        }
    }, [ dispatch, currentUser ]);

    const handleClick = () => {
        dispatch(logout());
    };

    return (
       <Box className={classes.wrapper}>
           <Paper elevation={24} variant={'outlined'} className={classes.inner}>
               {currentUser ? <Box>
                   <Typography sx={{ textAlign: 'center' }}>
                       <AccountCircleIcon sx={{ fontSize: '120px' }}/>
                   </Typography>
                   <TableContainer component={Paper}>
                       <TableHead>
                           <TableRow>
                               <TableCell className={classes.header}>Account info</TableCell>
                               <TableCell align="right">
                                   <Button size="large"
                                           className={classes.button}
                                           onClick={handleClick}
                                           endIcon={<LogoutIcon/>}>
                                       Logout
                                   </Button>
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
                   </TableContainer>
               </Box> : <Stack spacing={1}>
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
