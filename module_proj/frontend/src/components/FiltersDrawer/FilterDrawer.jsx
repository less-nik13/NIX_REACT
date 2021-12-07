import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    SwipeableDrawer,
    Button
} from '@mui/material';

import MultipleSelect from "../MultipleSelect/MultipleSelect";
import { getGenres, setFilters } from "../../redux/actions/movieActions";
import ScoreSlider from "../ScoreSlider/ScoreSlider";
import SortSelect from "../SortSelect/SortSelect";

const SCORE_RANGE = [ 0, 100 ];

const FilterDrawer = ({ sx }) => {
    const {
        filterOption,
        filters: { sort, genres, userScore }
    } = useSelector(state => state.movie);
    const [ open, setOpen ] = useState(false);
    const [ selectedSort, setSelectedSort ] = useState(sort);
    const [ selectedGenres, setSelectedGenres ] = useState(genres);
    const [ selectedScore, setSelectedScore ] = useState(userScore.length ? userScore : SCORE_RANGE);
    const dispatch = useDispatch();

    const toggleDrawer = (event) => {
        if(
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) return;

        if(!filterOption.genres.length) {
            dispatch(getGenres());
        }

        setOpen(!open);
    };

    const setUserScore = ({ target }) => {
        setSelectedScore(target.value);
    };

    const selectSort = (e) => {
        setSelectedSort(e.target.value);
    };

    const applyFilters = () => {
        dispatch(setFilters(selectedSort, selectedGenres, selectedScore));
        setOpen(!open);
    };

    const resetFilters = () => {
        setSelectedScore(SCORE_RANGE);
        setSelectedSort('');
        setSelectedGenres([]);
        dispatch(setFilters('', [], []));
        setOpen(!open);
    };

    return (
        <Box sx={sx}>
            <Button onClick={toggleDrawer}>{open ? 'Hide Filters' : 'Open Filters'}</Button>
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '30px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '400px',
                        width: '100%',
                        padding: '20px'
                    }}>
                        <SortSelect sort={selectedSort} selectSort={selectSort}/>
                        <MultipleSelect filter={filterOption.genres} selectedGenres={selectedGenres}
                                        setSelectedGenres={setSelectedGenres}/>
                        <ScoreSlider score={selectedScore} setScore={setUserScore}/>
                        <Box sx={{
                            mt: 2,
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Button size="large" variant="contained" onClick={applyFilters}>
                                Apply
                            </Button>
                            <Button sx={{ color: '#000' }} size="large" color="warning" variant="contained"
                                    onClick={resetFilters}>
                                Reset
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </SwipeableDrawer>
        </Box>
    );
};

export default FilterDrawer;