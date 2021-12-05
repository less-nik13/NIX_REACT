import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";

import { setAlert } from "../../redux/actions/alertActions";
import { apiInstance } from "../../api/axios.config";
import { MOVIE_URL, POSTER_URL } from "../../api/api-client";
import { convertDuration, moneyFormat } from "../../utils/utils";
import PlayButton from "../../components/PlayButton/PlayButton";
import CustomModal from '../../components/CustomModal/CustomModal';
import TrailerIframe from "../../components/TrailerIframe/TrailerIframe";
import Loading from "../../components/Loading/Loading";

import useStyles from './moviePage.style';

const MoviePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [ movie, setMovie ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ videos, setVideos ] = useState([]);
    const [ open, setOpen ] = useState(false);

    const handleOpen = async () => {
        setOpen(true);
        if(!videos.length) getTrailersData();
    };

    const handleClose = () => setOpen(false);

    const getTrailersData = async () => {
        try {
            const response = await apiInstance(`https://api.themoviedb.org/3/movie/${id}/videos`);
            const { results } = response.data;

            if(!results.length) {
                dispatch(setAlert('Trailers Not Found!', 'error', 4000));
                return;
            }
            setVideos(results);
        } catch(error) {
            dispatch(setAlert(error.response.data.message, 'error', 4000));
        }
    };

    console.log(videos);

    useEffect(() => {
        async function getMovieData() {
            const { data } = await apiInstance(`${MOVIE_URL}/${id}`);
            setMovie(data);
            setLoading(false);
        }

        getMovieData();

    }, [id]);

    return (
        <>
            {loading ? <Loading/> :
                <Box className={classes.movieWrapper}
                     sx={{ backgroundImage: `url(${POSTER_URL}${movie.backdrop_path})` }}>
                    <div className={classes.infoSection}>
                        <header className={classes.movieHeader}>
                            <Box mb={3} display="flex" alignItems="center" flexWrap="wrap">
                                {movie.genres.map((genre) => (
                                    <Typography
                                        key={genre.id}
                                        className={classes.tag}
                                        variant="body1"
                                        color="inherit">
                                        {genre.name}
                                    </Typography>
                                ))}

                                {/*<StyledRating*/}
                                {/*    value={4}*/}
                                {/*    readOnly*/}
                                {/*    size="small"*/}
                                {/*    emptyIcon={<StarBorderIcon fontSize="inherit" />}*/}
                                {/*/>*/}
                            </Box>
                            <Typography
                                className={classes.movieTitle}
                                variant="h1"
                                color="inherit">
                                {movie.title}{' '}
                                <sup className={classes.language}>({movie.original_language})</sup>
                            </Typography>
                            <Typography
                                className={classes.descriptionText}
                                variant="body1"
                                color="inherit">
                                {movie.overview}
                            </Typography>
                            <Typography className={classes.status} variant="h4" color="inherit">
                                Status: {movie.status}
                            </Typography>
                            <Typography
                                className={classes.runtime}
                                variant="body1"
                                color="inherit">
                                Runtime: {movie.runtime ? convertDuration(movie.runtime) : "-"}
                            </Typography>
                            <Typography
                                className={classes.releaseDate}
                                variant="body1"
                                color="inherit">
                                Release: {movie.release_date}
                            </Typography>
                            <Typography className={classes.revenue} variant="body1" color="inherit">
                                Revenue: {movie.revenue ? moneyFormat(movie.revenue) : "-"}
                            </Typography>
                            <Typography className={classes.adult} variant="body1" color="inherit">
                                Adult: {movie.adult ? "Yes" : "No"}
                            </Typography>
                            {/*{movie.homepage && <Box className={classes.links}>*/}
                            {/*    <MaterialLink href={movie.homepage}*/}
                            {/*                  target="_blank"*/}
                            {/*                  rel="noopener"*/}
                            {/*                  className={classes.link}>*/}
                            {/*        <LinkIcon size="large"/>*/}
                            {/*    </MaterialLink>*/}
                            {/*</Box>}*/}
                        </header>
                        <Box className={classes.playButtonWrapper} onClick={handleOpen}>
                            <PlayButton/>
                        </Box>
                        {videos.length > 0 &&
                            <CustomModal onClose={handleClose} isOpen={open}>
                                <TrailerIframe trailerUrl={videos.find(video => video.type === 'Trailer').key}/>
                            </CustomModal>}
                    </div>
                </Box>}
        </>
    );
};

export default MoviePage;