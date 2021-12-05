import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import { getFavorites } from "../../redux/actions/movieActions";
import PageHeader from "../../components/PageHeader/PageHeader";
import MovieList from "../../components/MovieList/MovieList";
import Loading from "../../components/Loading/Loading";

const FavoritesPage = () => {
    const { loading, favorites, favoritesIDS } = useSelector(state => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        if(favorites.length !== favoritesIDS.length) {
            dispatch(getFavorites());
        }// eslint-disable-next-line
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <PageHeader title="Favorites"/>
            {loading ? <Loading/> : <>
                <MovieList movies={favorites}/>
            </>}
        </Box>
    );
};

export default FavoritesPage;