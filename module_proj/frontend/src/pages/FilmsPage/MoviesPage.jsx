import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Pagination,
    TextField,
    Typography
} from "@mui/material";

import useStyles from './moviesPage.style';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Loading from "../../components/Loading/Loading";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "../../redux/actions/films";
import MovieList from "../../components/MovieList/MovieList";
import Spinner from "../../components/Spinner/Spinner";
import PageHeader from "../../components/PageHeader/PageHeader";
import MovieListLoader from "../../components/MovieListLoader/MovieListLoader";
import CustomPagination from "../../components/CustomPagination/CustomPagination";

const MoviesPage = () => {
    const classes = useStyles();
    const { loading, currentPage, totalPages } = useSelector(state => state.movie);
    const [ page, setPage ] = useState('1');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilms());
    }, []);

    const handlePagination = (event, value) => {
        if(value === currentPage) return;
        setPage(value.toString());
        dispatch(getFilms({ page: value }));
    };

    const handlePageChange = ({ target: { value } }) => {
        if(+value < 1 || +value > totalPages) return;
        setPage(value);
    };

    const onBlurChangePage = () => {
        if(+page !== currentPage) dispatch(getFilms({ page }));
    };

    const onKeyDownChangePage = (e) => {
        if(+page !== currentPage && (e.which === 13 || e.keyCode === 13 || e.key === "Enter")) {
            dispatch(getFilms({ page }));
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <PageHeader title="Home"/>
            {loading ? <MovieListLoader/> : <>
                <MovieList/>
                <CustomPagination totalPages={totalPages}
                                  currentPage={currentPage}
                                  page={page}
                                  handlePagination={handlePagination}
                                  onBlurChangePage={onBlurChangePage}
                                  onKeyDownChangePage={onKeyDownChangePage}
                                  handlePageChange={handlePageChange}
                />
            </>}
        </Box>
    );
};

export default MoviesPage;