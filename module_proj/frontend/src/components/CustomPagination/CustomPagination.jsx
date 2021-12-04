import React from 'react';
import { useTheme } from "@emotion/react";
import { Box, Pagination, TextField, useMediaQuery } from "@mui/material";

import useStyles from './customPagination.style';

const CustomPagination = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const {
        totalPages,
        currentPage,
        handlePagination,
        page,
        onBlurChangePage,
        onKeyDownChangePage,
        handlePageChange
    } = props;

    return (
        <Box className={classes.paginationWrapper}>
            <Pagination count={totalPages}
                        shape="rounded"
                        color="primary"
                        size={matches ? "medium" : "large"}
                        page={currentPage}
                        siblingCount={0}
                        onChange={handlePagination}
            />
            <TextField id="outlined-basic"
                       size="small"
                       label="Go To:"
                       variant="outlined"
                       className={classes.goTo}
                       onBlur={onBlurChangePage}
                       onKeyDown={onKeyDownChangePage}
                       onChange={handlePageChange}
                       type="number"
                       value={page}
                       InputProps={{ inputProps: { min: 1, max: totalPages } }}
            />
        </Box>
    );
};

export default CustomPagination;