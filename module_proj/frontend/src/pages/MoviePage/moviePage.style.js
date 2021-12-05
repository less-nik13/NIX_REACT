import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    movieWrapper: {
        height: '100vh',
        width: '100%',
        color: theme.palette.common.white,
        backgroundColor: theme.palette.background.dark,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    tag: {
        padding: theme.spacing(1, 3),
        marginRight: theme.spacing(1),
        border: '1px solid #fff',
        borderRadius: '4px'
    },
    movieTitle: {
        maxWidth: '60%',
        fontSize: '36px',
        lineHeight: 1.5,
        textTransform: 'capitalize',
    },
    infoSection: {
        position: 'relative',
        padding: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundBlendMode: 'multiply',
        background:
            'linear-gradient(to right, rgba(0,0,0,.9) 25%, rgba(0,0,0,.30) 100%)',
        zIndex: 2,
    },
    movieHeader: {
        position: 'relative',
        padding: theme.spacing(3),
        maxWidth: '60%',
        marginRight: '30px'
    },
    language: {
        color: theme.palette.common.muted,
        fontSize: '20px',
    },
    status: {
        color: theme.palette.link,
        fontWeight: '500',
        fontSize: '16px',
        marginTop: theme.spacing(1),
    },
    genre: {
        display: 'inline-block',
        color: '#cee4fd',
        marginLeft: theme.spacing(2)
    },
    descriptionText: {
        color: '#cfd6e1',
        padding: theme.spacing(2, 0),
        maxWidth: '60%'
    },
    runtime: {
        display: 'inline-block',
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        border: '1px solid rgba(255,255,255,0.2)',
        marginRight: theme.spacing(1),
        color: theme.palette.common.neutral
    },
    releaseDate: {
        display: 'inline-block',
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        border: '1px solid rgba(255,255,255,0.2)',
        marginRight: theme.spacing(1),
        color: theme.palette.common.neutral
    },
    revenue: {
        display: 'inline-block',
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        border: '1px solid rgba(255,255,255,0.2)',
        marginRight: theme.spacing(1),
        color: theme.palette.common.neutral
    },
    adult: {
        display: 'inline-block',
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        border: '1px solid rgba(255,255,255,0.2)',
        marginRight: theme.spacing(1),
        color: theme.palette.common.neutral
    },
    links: {
        display: 'flex',
        height: '60px',
        marginTop: theme.spacing(4),
    },
    linkIcon: {
        height: '30px'
    },
    link: {
        display: 'flex',
        padding: '5px',
        height: '45px',
        width: '45px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color .5s ease-in-out',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.3)',
            '& svg': {
                fill: theme.palette.link
            }
        }
    },
    playButtonWrapper: {
        width: '200px',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: '50%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        '&:hover': {
            transition: 'all .5s ease-in-out',
            '& svg path': {
                fill: theme.palette.link
            }
        }
    },

    movieActions: { position: 'absolute', bottom: 0, right: 0 },
    [theme.breakpoints.down('sm')]: {
        infoSection: {
            background:
                'linear-gradient(to right, rgba(0,0,0,.9) 50%, rgba(0,0,0,.50) 100%)'
        },
        movieHeader: { maxWidth: '90%' },
        movieTitle: {
            maxWidth: '100%',
            fontSize: '16px'
        },
        descriptionText: {
            maxWidth: '100%',
            fontSize: '12px'
        },
        tag: { padding: theme.spacing(0.3, 1), margin: theme.spacing(1, 1, 1, 0) },
        movieActions: { display: 'flex', width: '100%' },
    }
}));

export default useStyles;
