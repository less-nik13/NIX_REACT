import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import useStyles from "./movieItem.style";
import { MOVIE_URL, POSTER_URL } from "../../api/api-client";
import { textTruncate } from "../../utils/utils";
import { useSelector } from "react-redux";

const MovieItem = ({ movie }) => {
    const classes = useStyles();
    const [ isFavorite, setIsFavorite ] = useState(false);
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector(state => state.auth);

    const addToFavorites = (id) => {
        console.log('added');
        setIsFavorite(true);
    };

    const removeFromFavorites = (id) => {
        console.log('removed');
        setIsFavorite(false);
    };

    const handleFavoriteCLick = (id) => {
        console.log('clicked', id);
        if(!isAuthenticated) navigate('/login');
        setIsFavorite((prevState) => {
            !prevState ? addToFavorites(id) : removeFromFavorites(id);
        });
    };

    return (
        <Card sx={{ maxWidth: 340 }} className={classes.movieItemWrapper}>
            <Link to={`${MOVIE_URL}/${movie.id}/?api_key=${process.env.REACT_APP_API_KEY}`} className={classes.link}>
                <CardMedia
                    className={classes.movieImage}
                    component="img"
                    image={`${POSTER_URL}/${movie.poster_path}`}
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
                        <Box className={classes.rating}>
                            <Typography sx={{ zIndex: 1 }} variant="caption" component="div" color="#fff">
                                {`${movie.vote_average * 10}%`}
                            </Typography>
                        </Box>
                        <CircularProgress color="warning" variant="determinate" value={movie.vote_average * 10}/>
                    </Box>
                </CardContent>
            </Link>
            <IconButton aria-label="add to favorites" className={classes.addFavorite}
                        onClick={() => handleFavoriteCLick(movie.id)}>
                {isFavorite ?
                    <StarIcon className={classes.favoriteIcon} fontSize="large"/> :
                    <StarBorderIcon className={classes.favoriteIcon} fontSize="large"/>}
            </IconButton>
        </Card>
    );
};
// className={isFavorite ? classes.favoriteUnactive : classes.favoriteActive}
export default MovieItem;