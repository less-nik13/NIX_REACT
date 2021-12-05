import React from 'react';

import MovieItem from "../MovieItem/MovieItem";
import useStyles from './movieList.style';
import { Box, Typography } from "@mui/material";

const MovieList = ({ movies }) => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.listWrapper}>
                {movies.length > 0 && movies.map(movie =>
                    <MovieItem key={movie.id} movie={movie}/>)}
            </Box>
            {!movies.length &&
                <Typography variant="h4" component="h3" sx={{ textAlign: 'center' }}>
                    Movies Not Found 🙄
                </Typography>}
        </>
    );
};

export default MovieList;