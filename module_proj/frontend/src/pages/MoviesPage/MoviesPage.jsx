import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import { getMovies } from "../../redux/actions/movieActions";
import MovieList from "../../components/MovieList/MovieList";
import PageHeader from "../../components/PageHeader/PageHeader";
import MovieListLoader from "../../components/MovieListLoader/MovieListLoader";
import CustomPagination from "../../components/CustomPagination/CustomPagination";

const MoviesPage = () => {
    const { loading, currentPage, totalPages, movies } = useSelector(state => state.movie);
    const [ page, setPage ] = useState('1');
    const dispatch = useDispatch();

    useEffect(() => {
        if(!movies.length) {
            dispatch(getMovies());
        }
    }, [ movies, dispatch ]);

    const handlePagination = (event, value) => {
        if(value === currentPage) return;
        setPage(value.toString());
        dispatch(getMovies({ page: value }));
    };

    const handlePageChange = ({ target: { value } }) => {
        if(+value < 1 || +value > totalPages) return;
        setPage(value);
    };

    const onBlurChangePage = () => {
        if(+page !== currentPage) dispatch(getMovies({ page }));
    };

    const onKeyDownChangePage = (e) => {
        if(+page !== currentPage && (e.which === 13 || e.keyCode === 13 || e.key === "Enter")) {
            dispatch(getMovies({ page }));
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <PageHeader title="Home"/>
            {loading ? <MovieListLoader/> : <>
                <MovieList movies={movies}/>
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