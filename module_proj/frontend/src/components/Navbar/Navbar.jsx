import * as React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import PersonIcon from '@mui/icons-material/Person';

import logo from '../../Logo.png';
import NavSearch from "../NavSearch/NavSearch";
import DrawerComponent from "../DrawerComponent/DrawerComponent";

import useStyles from './navbar.style';

const ResponsiveAppBar = () => {
    const [ anchorElUser, setAnchorElUser ] = React.useState(null);
    const { isAuthenticated } = useSelector(state => state.auth);
    const theme = useTheme();
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
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
                            ['@media (min-width:410px)']: {
                                display: 'flex'
                            }
                        }}
                    >
                        <Link className={classes.logoLink} to="/">
                            <img src={logo} alt="Removie Logo"/>
                        </Link>
                    </Typography>
                    {isMobile ?
                        <Box sx={{ order: { xs: '0' } }}>
                            <DrawerComponent isAuthenticated={isAuthenticated}/>
                        </Box> : (
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <List className={classes.list} disablePadding>
                                    <ListItem className={classes.listItem} sx={{ padding: 0 }} button disableGutters>
                                        <Link className={classes.link} to="/">
                                            Home
                                        </Link>
                                    </ListItem>
                                    <ListItem className={classes.listItem} sx={{ padding: 0 }} button disableGutters>
                                        <Link className={classes.link} to="/">
                                            Top Rated
                                        </Link>
                                    </ListItem>
                                    <ListItem className={classes.listItem} sx={{ padding: 0 }} button disableGutters>
                                        <Link className={classes.link} to="/">
                                            Upcoming
                                        </Link>
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
                        <Box sx={{ flexGrow: 0, marginLeft: '20px', display: { xs: 'none', md: 'block' } }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar>
                                        <PersonIcon sx={{ color: theme.palette.link }}/>
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
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
                                <List disablePadding>
                                    <ListItem className={classes.listItem} sx={{ padding: 0 }} button disableGutters>
                                        <Link className={classes.link} to="/">
                                            Profile
                                        </Link>
                                    </ListItem>
                                    <ListItem className={classes.listItem} sx={{ padding: 0 }} button disableGutters>
                                        <Link className={classes.link} to="/">
                                            Favorites
                                        </Link>
                                    </ListItem>
                                    <ListItem className={classes.listItem} sx={{ padding: 0 }} button disableGutters>
                                        <Link className={classes.link} to="/">
                                            Logout
                                        </Link>
                                    </ListItem>
                                </List>
                            </Menu>
                        </Box>}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
