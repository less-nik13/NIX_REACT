import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { alpha, styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { changePage, setSearch } from "../../redux/actions/movieActions";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: '10px',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit', '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0), // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '16ch', '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const NavSearch = () => {
    const [ searchQuery, setSearchQuery ] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            dispatch(changePage(1));
            dispatch(setSearch(searchQuery));

            if(!e.target.value) {
                dispatch(setSearch(searchQuery));
            }

            if(location.pathname !== '/') {
                navigate('/');
            }
            return;
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <Search onChange={handleSearchChange} value={searchQuery} onKeyDown={handleKeyDown}>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search movie..."
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    );
};

export default NavSearch;