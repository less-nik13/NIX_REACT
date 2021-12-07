import React from 'react';
import {
    Autocomplete,
    TextField,
    Stack,
    Typography
} from '@mui/material';

const MultipleSelect = ({ filter, selectedGenres, setSelectedGenres }) => {
    return (
        <Stack sx={{ width: '100%', my: 2 }}>
            <Typography variant="h5">
                Genres:
            </Typography>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={filter}
                getOptionLabel={(option) => option.name}
                value={selectedGenres}
                onChange={(e, attr) => setSelectedGenres(attr)}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Genres Filter"
                        placeholder="Genres"
                    />
                )}
            />
        </Stack>
    );
};

export default MultipleSelect;