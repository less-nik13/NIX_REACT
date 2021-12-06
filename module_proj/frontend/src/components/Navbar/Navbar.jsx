import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from "@emotion/react";
import {
    useMediaQuery,
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Tooltip,
    ListItem,
    List, MenuItem
} from "@mui/material";

import { logout } from "../../redux/actions/authActions";
import logo from '../../images/Logo.png';
import NavSearch from "../NavSearch/NavSearch";
import DrawerComponent from "../DrawerComponent/DrawerComponent";

import useStyles from './navbar.style';

const ResponsiveAppBar = ({bgColor}) => {
    const [ anchorElUser, setAnchorElUser ] = React.useState(null);
    const { isAuthenticated, currentUser } = useSelector(state => state.auth);
    const theme = useTheme();
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        dispatch(logout());
        setAnchorElUser(null);
        navigate('/');
    };

    return (
        <AppBar sx={bgColor && { backgroundColor: bgColor }} position="fixed">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            marginLeft: 'auto',
                            marginRight: { md: 2 },
                            display: { xs: 'none', md: 'flex' },
                            order: { xs: '1', md: '0' },
                            '@media (min-width:460px)': {
                                display: 'flex'
                            }
                        }}
                    >
                        <Link className={classes.logoLink} to="/">
                            <img src={logo} alt="Removie Logo"/>
                        </Link>
                    </Typography>
                    {isMobile ?
                        <Box sx={{ order: { xs: '0'} }}>
                            <DrawerComponent isAuthenticated={isAuthenticated}/>
                        </Box> : (
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <List className={classes.list} disablePadding>
                                    <ListItem className={classes.listItem} sx={{ padding: 0 }} button disableGutters>
                                        <NavLink to="/" className={classes.link} style={({ isActive }) => ({
                                            color: isActive ? "#ffd537" : ""
                                        })}>
                                            Home
                                        </NavLink>
                                    </ListItem>
                                    <ListItem className={classes.listItem} sx={{ padding: 0 }} button disableGutters>
                                        <NavLink className={classes.link} to="/top_rated" style={({ isActive }) => ({
                                            color: isActive ? "#ffd537" : ""
                                        })}>
                                            Top Rated
                                        </NavLink>
                                    </ListItem>
                                    <ListItem className={classes.listItem} sx={{ padding: 0 }} button disableGutters>
                                        <NavLink className={classes.link} to="/upcoming" style={({ isActive }) => ({
                                            color: isActive ? "#ffd537" : ""
                                        })}>
                                            Upcoming
                                        </NavLink>
                                    </ListItem>
                                    {!isAuthenticated &&
                                        <>
                                            <ListItem className={classes.listItem} sx={{ padding: 0 }} button
                                                      disableGutters>
                                                <Link className={classes.link} to="/register">
                                                    Sign Up
                                                </Link>
                                            </ListItem>
                                            <ListItem className={classes.listItem} sx={{ padding: 0 }} button
                                                      disableGutters>
                                                <Link className={classes.link} to="/login">
                                                    Sign In
                                                </Link>
                                            </ListItem>
                                        </>
                                    }
                                </List>
                            </Box>
                        )}
                    <NavSearch/>
                    {isAuthenticated &&
                        <>
                            <Box sx={{ flexGrow: 0, marginLeft: '20px', display: { xs: 'none', md: 'block' } }}>
                                <Tooltip title={currentUser.name}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar sx={{ color: theme.palette.link }}>
                                            {currentUser.name[0].toUpperCase()}
                                        </Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem className={classes.listItem} sx={{ padding: 0 }} onClick={handleCloseUserMenu}
                                          disableGutters>
                                    <NavLink className={classes.link} to="/profile" style={({ isActive }) => ({
                                        color: isActive ? "#ffd537" : ""
                                    })}>
                                        Profile
                                    </NavLink>
                                </MenuItem>
                                <MenuItem className={classes.listItem} sx={{ padding: 0 }} onClick={handleCloseUserMenu}
                                          disableGutters>
                                    <NavLink className={classes.link} to="/favorites" style={({ isActive }) => ({
                                        color: isActive ? "#ffd537" : ""
                                    })}>
                                        Favorites
                                    </NavLink>
                                </MenuItem>
                                <MenuItem className={classes.logoutButton}
                                          onClick={handleLogout}
                                          disableGutters>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
