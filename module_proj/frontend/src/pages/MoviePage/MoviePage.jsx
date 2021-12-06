import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Typography, Link as MaterialLink, Button } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { setAlert } from "../../redux/actions/alertActions";
import { apiInstance } from "../../api/axios.config";
import { BACKDROP_IMAGE_URL, MOVIE_URL } from "../../api/api-client";
import { convertDuration, moneyFormat, textTruncate } from "../../utils/utils";
import PlayButton from "../../components/PlayButton/PlayButton";
import CustomModal from '../../components/CustomModal/CustomModal';
import TrailerIframe from "../../components/TrailerIframe/TrailerIframe";
import Loading from "../../components/Loading/Loading";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import fallbackImage from '../../images/black-glitch-effect-texture.jpg';

import useStyles from './moviePage.style';

const MoviePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [ movie, setMovie ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        if(!movie.videos.results.some(video => video.type === 'Trailer')) {
            dispatch(setAlert('Trailers Not Found!', 'error', 4000));
            return;
        }

        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        async function getMovieData() {
            try {
                setLoading(true);
                const { data } = await apiInstance(`${MOVIE_URL}/${id}`, {
                    params: {
                        append_to_response: 'videos'
                    }
                });

                setMovie(data);
                setLoading(false);
            } catch(error) {
                dispatch(setAlert(error.response.data.message, 'error', 4000));
            }
        }

        getMovieData();
    }, [ id, dispatch ]);

    return (
        <>
            {loading ? <Loading/> :
                <Box className={classes.movieWrapper}
                     sx={{ backgroundImage: `url(${movie.backdrop_path ? `${BACKDROP_IMAGE_URL}${movie.backdrop_path}` : fallbackImage})` }}>
                    <div className={classes.infoSection}>
                        <Button className={classes.backButton} onClick={() => navigate(-1)}
                                startIcon={<KeyboardBackspaceIcon/>}>
                            Back
                        </Button>
                        <div className={classes.wrapper}>
                            <FavoriteButton movie={movie} position={{ position: 'relative' }}/>
                            <div className={classes.iconsWrapper}>
                                {movie.homepage &&
                                    <MaterialLink href={movie.homepage}
                                                  target="_blank"
                                                  rel="noopener"
                                                  className={classes.link}>
                                        <LinkIcon size="large"/>
                                    </MaterialLink>}
                                {movie.videos.results.length > 0 &&
                                    <Box className={classes.playButtonWrapper} onClick={handleOpen}>
                                        <PlayButton/>
                                    </Box>}
                            </div>
                        </div>
                        <header className={classes.movieHeader}>
                            <Box my={3} display="flex" alignItems="center" flexWrap="wrap">
                                {movie.genres.map((genre) => (
                                    <Typography
                                        key={genre.id}
                                        className={classes.genre}
                                        variant="body1"
                                        color="inherit">
                                        {genre.name}
                                    </Typography>
                                ))}
                            </Box>
                            <Box className={classes.movieTitleWrapper}>
                                <Typography variant="h1"
                                            color="inherit" className={classes.movieTitle}>
                                    {movie.title}{' '}
                                    <sup className={classes.language}>({movie.original_language})</sup>
                                </Typography>
                            </Box>
                            <Typography
                                className={classes.descriptionText}
                                variant="body1"
                                color="inherit">
                                {textTruncate(movie.overview, 300)}
                            </Typography>
                            <Typography className={classes.status} variant="h4" color="inherit">
                                Status: {movie.status}{movie.vote_count ? ` , Votes: ${movie.vote_count}` : null}
                                {movie.vote_average ? `, Rating: ${movie.vote_average}` : null}
                            </Typography>
                            <Typography
                                className={classes.secondaryInfo}
                                variant="body1"
                                color="inherit">
                                Runtime: {movie.runtime ? convertDuration(movie.runtime) : "-"}
                            </Typography>
                            <Typography
                                className={classes.secondaryInfo}
                                variant="body1"
                                color="inherit">
                                Release: {movie.release_date}
                            </Typography>
                            <Typography className={classes.secondaryInfo} variant="body1" color="inherit">
                                Revenue: {movie.revenue ? moneyFormat(movie.revenue) : "-"}
                            </Typography>
                            <Typography className={classes.secondaryInfo} variant="body1" color="inherit">
                                Adult: {movie.adult ? "Yes" : "No"}
                            </Typography>
                        </header>
                        {movie.videos.results.some(video => video.type === 'Trailer') &&
                            <CustomModal onClose={handleClose} isOpen={open}>
                                <TrailerIframe
                                    trailerUrl={movie.videos.results.find(video => video.type === 'Trailer').key}/>
                            </CustomModal>}
                    </div>
                </Box>}
        </>
    );
};

export default MoviePage;