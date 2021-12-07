import React from 'react';
import {
    Box,
    Typography,
    MenuItem,
    FormControl,
    Select
} from '@mui/material';

const SortSelect = ({ sort, selectSort }) => {
    return (
        <Box>
            <Typography variant="h5">
                Sort By:
            </Typography>
            <FormControl size="small">
                <Select
                    value={sort}
                    onChange={selectSort}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="popularity">Popularity</MenuItem>
                    <MenuItem value="release_date">Release date</MenuItem>
                    <MenuItem value="vote_average">Vote average</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SortSelect;