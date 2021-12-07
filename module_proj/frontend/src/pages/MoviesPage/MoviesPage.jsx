import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import { changePage, getMovies, getMoviesBySearchQuery } from "../../redux/actions/movieActions";
import MovieList from "../../components/MovieList/MovieList";
import PageHeader from "../../components/PageHeader/PageHeader";
import MovieListLoader from "../../components/MovieListLoader/MovieListLoader";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import FilterDrawer from "../../components/FiltersDrawer/FilterDrawer";

const MoviesPage = ({ url, title }) => {
    const {
        loading,
        movies,
        search,
        pagination: {
            currentPage,
            totalPages
        },
        filters: {
            sort,
            genres,
            userScore
        }
    } = useSelector(state => state.movie);
    const [ page, setPage ] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        if(search) {
            dispatch(getMoviesBySearchQuery(currentPage, totalPages, search));
            setPage(currentPage);
        } else {
            dispatch(getMovies(url, currentPage, totalPages, {sort, genres, userScore}));
            setPage(currentPage);
        }
    }, [ currentPage, totalPages, search, dispatch, url, sort, genres, userScore ]);


    const handlePagination = (event, value) => {
        if(value === currentPage) return;
        dispatch(changePage(value));
        setPage(value);
    };

    // handle GO TO input state
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
            {!search && <FilterDrawer sx={{ position: 'absolute', right: '30px'}} />}
            <PageHeader title={search ? `Search Results: ${search}` : title}/>
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