import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { addToFavorites, removeFromFavorites } from "../../redux/actions/movieActions";

import useStyles from "./favoriteButton.style";

const FavoriteButton = ({ movie, position }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const classes = useStyles(position);
    const [ isFavorite, setIsFavorite ] = useState(false);
    const { isAuthenticated, favoritesIDS } = useSelector(state => ({
        isAuthenticated: state.auth.isAuthenticated,
        favoritesIDS: state.movie.favoritesIDS
    }));

    useEffect(() => {
        if(isAuthenticated) {
            checkIsFavorite();
        }
        // eslint-disable-next-line
    }, [ isAuthenticated ]);

    const checkIsFavorite = () => {
        setIsFavorite(favoritesIDS.includes(movie.id));
    };

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
        }

        setIsFavorite((prevState) => {
            !prevState ? handleAddFavorite(movie) : handleRemoveFavorite(movie.id);
        });
    };

    return (
        <Tooltip title={!isAuthenticated ? 'You must be authorized!' : ''} placement="left" arrow>
            <IconButton aria-label="add to favorites" className={classes.addFavorite}
                        onClick={() => handleFavoriteCLick(movie)}>
                {isFavorite ?
                    <StarIcon className={classes.favoriteIcon} fontSize="large"/> :
                    <StarBorderIcon className={classes.favoriteIcon} fontSize="large"/>}
            </IconButton>
        </Tooltip>
    );
};

export default FavoriteButton;