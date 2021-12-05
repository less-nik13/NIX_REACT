import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, CircularProgress, Tooltip, Typography, Zoom } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import useStyles from "./movieItem.style";
import { MOVIE_URL, POSTER_URL } from "../../api/api-client";
import { textTruncate } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/movieActions";

const MovieItem = ({ movie }) => {
    const classes = useStyles();
    const [ isFavorite, setIsFavorite ] = useState(false);
    const { isAuthenticated, favoritesIDS } = useSelector(state => ({
        isAuthenticated: state.auth.isAuthenticated,
        favoritesIDS: state.movie.favoritesIDS
    }));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(isAuthenticated) {
            checkIsFavorite()
        }
    }, [])

    const checkIsFavorite = () => {
        setIsFavorite(favoritesIDS.includes(movie.id));
    }

    const handleAddFavorite = (movie) => {
        dispatch(addToFavorites(movie));
        setIsFavorite(true);
    };

    const handleRemoveFavorite = (id) => {
        dispatch(removeFromFavorites(id));
        setIsFavorite(false);
    };

    const handleFavoriteCLick = (movie) => {
        if(!isAuthenticated) {
            navigate('/login');
            return;
        };
        setIsFavorite((prevState) => {
            !prevState ? handleAddFavorite(movie) : handleRemoveFavorite(movie.id);
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
            <Tooltip title={!isAuthenticated ? 'You must be authorized!' : ''} placement="left" arrow>
                <IconButton aria-label="add to favorites" className={classes.addFavorite}
                            onClick={() => handleFavoriteCLick(movie)}>
                    {isFavorite ?
                        <StarIcon className={classes.favoriteIcon} fontSize="large"/> :
                        <StarBorderIcon className={classes.favoriteIcon} fontSize="large"/>}
                </IconButton>
            </Tooltip>
        </Card>
    );
};

export default MovieItem;