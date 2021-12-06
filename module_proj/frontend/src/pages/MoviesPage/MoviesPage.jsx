import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import { changePage, getMovies, getMoviesBySearchQuery } from "../../redux/actions/movieActions";
import MovieList from "../../components/MovieList/MovieList";
import PageHeader from "../../components/PageHeader/PageHeader";
import MovieListLoader from "../../components/MovieListLoader/MovieListLoader";
import CustomPagination from "../../components/CustomPagination/CustomPagination";

const MoviesPage = ({ url }) => {
    const {
        loading,
        movies,
        search,
        pagination: {
            currentPage,
            totalPages
        },
    } = useSelector(state => state.movie);
    const dispatch = useDispatch();
    const [ page, setPage ] = useState(currentPage);

    useEffect(() => {
        if(search) {
            dispatch(getMoviesBySearchQuery(currentPage, search));
        } else {
            dispatch(getMovies(url, currentPage));
        }
    }, [ currentPage, search, dispatch, url ]);


    const handlePagination = (event, value) => {
        if(value === currentPage) return;
        setPage(value);
        dispatch(changePage(value));
    };

    const handlePageChange = ({ target: { value } }) => {
        if(+value < 1 || +value > totalPages) return;
        setPage(+value);
    };

    const onBlurChangePage = () => {
        if(+page !== currentPage) dispatch(changePage(page));
    };

    const onKeyDownChangePage = (e) => {
        if(+page !== currentPage && (e.which === 13 || e.keyCode === 13 || e.key === "Enter")) {
            dispatch(changePage(page));
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <PageHeader title={search ? `Search Results: ${search}` : "Home"}/>
            {loading ? <MovieListLoader/> : <>
                <MovieList movies={movies}/>
                {movies.length > 0 && <CustomPagination totalPages={totalPages}
                                                        currentPage={currentPage}
                                                        page={page}
                                                        handlePagination={handlePagination}
                                                        onBlurChangePage={onBlurChangePage}
                                                        onKeyDownChangePage={onKeyDownChangePage}
                                                        handlePageChange={handlePageChange}
                />}
            </>}
        </Box>
    );
};

export default MoviesPage;