import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/actions/movieActions";
import PageHeader from "../../components/PageHeader/PageHeader";
import MovieList from "../../components/MovieList/MovieList";
import { Box } from "@mui/material";
import Loading from "../../components/Loading/Loading";

const FavoritesPage = () => {
    const { loading, favorites, favoritesIDS } = useSelector(state => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        if(favorites.length !== favoritesIDS.length) {
            dispatch(getFavorites());
        }
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