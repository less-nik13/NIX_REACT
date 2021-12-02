import * as React from 'react';
import { Link, NavLink } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';

import useStyles from './drawerComponent.style';

const drawerWidth = '100%';
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function DrawerComponent({ isAuthenticated }) {
    const theme = useTheme();
    const classes = useStyles();
    const [ open, setOpen ] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <IconButton
                    color="warning"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                    <MenuIcon/>
                </IconButton>
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        borderRight: 'none'
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
            >
                <DrawerHeader>
                    <IconButton className={classes.closeButton} onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List className={classes.list} disablePadding>
                    <ListItem sx={{ padding: 0, transition: 'background .3s ease-in-out' }} button disableGutters>
                        <NavLink className={classes.link} to="/" style={({ isActive }) => ({
                            color: isActive ? "#ffd537" : ""
                        })}>
                            Home
                        </NavLink>
                    </ListItem>
                    <ListItem sx={{ padding: 0, transition: 'background .6s ease-in-out' }} button disableGutters>
                        <NavLink className={classes.link} to="/top" style={({ isActive }) => ({
                            color: isActive ? "#ffd537" : ""
                        })}>
                            Top Rated
                        </NavLink>
                    </ListItem>
                    <ListItem sx={{ padding: 0, transition: 'background .6s ease-in-out' }} button disableGutters>
                        <NavLink className={classes.link} to="/upcoming" style={({ isActive }) => ({
                            color: isActive ? "#ffd537" : ""
                        })}>
                            Upcoming
                        </NavLink>
                    </ListItem>
                </List>
                <Divider/>
                <List className={classes.list} disablePadding>
                    {!isAuthenticated ?
                        <>
                            <ListItem sx={{ padding: 0, transition: 'background .6s ease-in-out' }} button
                                      disableGutters>
                                <Link className={classes.link} to="/register">
                                    Sign Up
                                </Link>
                            </ListItem>
                            <ListItem sx={{ padding: 0, transition: 'background .6s ease-in-out' }} button
                                      disableGutters>
                                <Link className={classes.link} to="/login">
                                    Sign In
                                </Link>
                            </ListItem>
                        </> :
                        <>
                            <ListItem sx={{ padding: 0, transition: 'background .6s ease-in-out' }} button
                                      disableGutters>
                                <NavLink className={classes.link} to="/profile" style={({ isActive }) => ({
                                    color: isActive ? "#ffd537" : ""
                                })}>
                                    Profile
                                </NavLink>
                            </ListItem>
                            <ListItem sx={{ padding: 0, transition: 'background .6s ease-in-out' }} button
                                      disableGutters>
                                <NavLink className={classes.link} to="/favorites" style={({ isActive }) => ({
                                    color: isActive ? "#ffd537" : ""
                                })}>
                                    Favorites
                                </NavLink>
                            </ListItem>
                            <ListItem sx={{ padding: 0, transition: 'background .6s ease-in-out' }} button
                                      disableGutters>
                                <Link className={classes.link} to="/logout">
                                    Logout
                                </Link>
                            </ListItem>
                        </>}
                </List>
            </Drawer>
        </>
    );
}

export default DrawerComponent;