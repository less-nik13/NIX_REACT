import React from 'react';

import useStyles from './trailerIframe.style';

const TrailerIframe = ({ trailerUrl }) => {
    const classes = useStyles();

    return (
        <div className={classes.videoWrapper}>
            <iframe src={`https://www.youtube.com/embed/${trailerUrl}`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </div>
    );
};

export default TrailerIframe;
