import React from 'react';
import { Grid, Box, Skeleton } from '@mui/material';

import useStyles from './movieListLoader.style';

const MovieListLoader = () => {
    const classes = useStyles();
    const skeletonItems = Array.from(new Array(20));

    return (
        <>
            <Grid container className={classes.listWrapper}>
                {skeletonItems.map((_, index) => (
                    <Box className={classes.movieItemWrapper} key={index}>
                        <Skeleton className={classes.imageLoader} variant="rectangular"/>
                        <Skeleton className={classes.detailsLoader}/>
                    </Box>
                ))}
            </Grid>
            <Box className={classes.paginationLoader}>
                <Skeleton height={70}/>
            </Box>
        </>
    );
};

export default MovieListLoader;