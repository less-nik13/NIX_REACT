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
    infoSection: {
        padding: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundBlendMode: 'multiply',
        background:
            'linear-gradient(to right, rgba(0,0,0,.9) 25%, rgba(0,0,0,.30) 100%)',
        zIndex: 2,
        position: 'relative'
    },
    movieTitleWrapper: {
        maxWidth: '60%',
        display: 'flex',
        alignItems: 'center',
        '@media (max-width: 930px)': {
            maxWidth: '80%',
        }
    },
    movieTitle: {
        fontSize: '36px',
        lineHeight: 1.5,
        textTransform: 'capitalize',
        marginRight: '15px'
    },
    genre: {
        padding: theme.spacing(1, 3),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        border: '1px solid #fff',
        borderRadius: '4px'
    },
    iconsWrapper: {
        display: 'inline-flex',
        alignItems: 'center',
    },
    movieHeader: {
        padding: theme.spacing(3),
        paddingTop: '0px',
        maxWidth: '60%',
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
    descriptionText: {
        color: '#cfd6e1',
        padding: theme.spacing(2, 0),
        maxWidth: '60%',
        '@media (max-width: 930px)': {
            maxWidth: '80%',
        }
    },
    secondaryInfo: {
        display: 'inline-block',
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        border: '1px solid rgba(255,255,255,0.2)',
        marginRight: theme.spacing(1),
        color: theme.palette.common.neutral
    },
    link: {
        display: 'flex',
        margin: '0 15px',
        height: '51px',
        width: '51px',
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
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '60%',
        width: '100%',
        padding: '24px',
        paddingBottom: '0px'
    },
    playButtonWrapper: {
        position: 'absolute',
        top: '50%',
        right: '10%',
        transform: 'translate(-50%, -50%)',
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
        },
        '@media (max-width: 1310px)': {
            width: '120px',
        },
        '@media (max-width: 900px)': {
            width: '70px',
        }
    },
    backButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: '15px 75px',
        fontSize: '24px',
        textTransform: 'capitalize',
        backgroundColor: theme.palette.common.blue,
        color: theme.palette.common.white,
        borderRadius: '0'
    },
    movieActions: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    [theme.breakpoints.down('sm')]: {
        infoSection: {
            background:
                'linear-gradient(to right, rgba(0,0,0,.9) 50%, rgba(0,0,0,.50) 100%)'
        },
        movieHeader: {
            maxWidth: '100%',
            marginRight: 0,
            padding: theme.spacing(0),
        },
        movieTitle: {
            maxWidth: '100%',
            fontSize: '16px',
        },
        language: {
            fontSize: '16px'
        },
        descriptionText: {
            maxWidth: '100%',
            fontSize: '12px'
        },
        genre: {
            padding: theme.spacing(0.5, 1),
            fontSize: '13px'
        },
        secondaryInfo: {
            padding: theme.spacing(0.5),
            fontSize: '13px'
        },
        playButtonWrapper: {
            position: 'relative',
            width: '45px',
            display: 'flex',
            alignItems: 'center',
            top: '0',
            right: '0',
            transform: 'translate(0, 0)',
        },
        link: {
            margin: '0 15px'
        },
        tag: {
            padding: theme.spacing(0.3, 1),
            margin: theme.spacing(1, 1, 1, 0)
        },
        movieActions: {
            display: 'flex',
            width: '100%'
        },
        wrapper: {
            maxWidth: '100%',
            padding: 0
        }
    }
}));

export default useStyles;
