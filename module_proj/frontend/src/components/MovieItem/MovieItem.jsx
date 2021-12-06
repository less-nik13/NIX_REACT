import React from 'react';
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, CircularProgress, Tooltip, Typography, Zoom } from "@mui/material";

import { POSTER_URL } from "../../api/api-client";
import { textTruncate } from "../../utils/utils";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import imageNotFound from '../../images/image_not_found.png';

import useStyles from "./movieItem.style";

const MovieItem = ({ movie }) => {
    const classes = useStyles();
    const movieImage = movie.poster_path ? `${POSTER_URL}/${movie.poster_path}` : imageNotFound;

    return (
        <Card sx={{ maxWidth: 340 }} className={classes.movieItemWrapper}>
            <Link to={`/movie/${movie.id}`} className={classes.link}>
                <CardMedia
                    className={classes.movieImage}
                    component="img"
                    image={movieImage}
                    alt={movie.title}
                />
                <CardContent className={classes.details}>
                    <Typography className={classes.title} gutterBottom variant="h5" component="p">
                        {textTruncate(movie.title)}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p">
                        {movie.release_date}
                    </Typography>
                    <Box className={classes.ratingWrapper}>
                        <Tooltip title={`Rating on ${movie.vote_count} votes`} TransitionComponent={Zoom} arrow
                                 placement="right">
                            <Box className={classes.rating}>
                                <Typography sx={{ zIndex: 1 }} variant="caption" component="div" color="#fff">
                                    {`${movie.vote_average * 10}%`}
                                </Typography>
                            </Box>
                        </Tooltip>
                        <CircularProgress color="warning" variant="determinate" value={movie.vote_average * 10}/>
                    </Box>
                </CardContent>
            </Link>
            <FavoriteButton movie={movie} position={{ position: 'absolute' }}/>
        </Card>
    );
};

export default MovieItem;