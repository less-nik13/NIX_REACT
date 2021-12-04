import React from 'react';
import { useSelector } from "react-redux";

import MovieItem from "../MovieItem/MovieItem";
import useStyles from './movieList.style';
import { Box } from "@mui/material";

const MovieList = () => {
    const { movies } = useSelector(state => state.movie);
    const classes = useStyles();

    return (
        <Box className={classes.listWrapper}>
            {
                movies && movies.map(movie => <MovieItem key={movie.id} movie={movie}/>)
            }
        </Box>
    );
};

export default MovieList;