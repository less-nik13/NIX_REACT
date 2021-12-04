import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    listWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 30rem))',
        justifyContent: 'space-evenly',
        alignContent: 'space-between',
        alignItems: 'start',
        padding: '1rem 0',
        gridGap: '4rem 1rem',
        '@media (min-width: 767px)': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 20rem))',
            justifyContent: 'space-around',
            gridGap: '4rem 1.5rem',
        },
        '@media (min-width: 991px)': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 18rem))',
            gridGap: '4rem 2rem',
        }
    },
    movieItemWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifySelf: 'center',
        borderRadius: '0.8rem',
        overflow: 'hidden',
        width: '100%',
    },
    imageLoader: {
        width: '100%',
        height: '432px',
        borderRadius: '0.8rem',
    },
    detailsLoader: {
        borderRadius: '0.8rem',
        height: '118px'
    },
    paginationLoader: {
        maxWidth: '500px',
        width: '100%',
        margin: '0 auto 10px'
    }
});

export default useStyles;