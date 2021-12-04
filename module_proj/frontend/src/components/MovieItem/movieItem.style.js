import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
        movieItemWrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifySelf: 'center',
            backgroundColor: 'transparent',
            borderRadius: '0.8rem',
            transition: 'all .5s cubic-bezier(0.645, 0.045, 0.355, 1)',
            position: 'relative',

            '&:hover': {
                transform: 'scale(1.03)',
                '& img': {
                    borderRadius: '0.8rem 0.8rem 0rem 0rem',
                    boxShadow: 'none',
                },
                '& p': {
                    color: theme.palette.default.main
                }
            },

            '&:hover::after': {
                transform: 'scaleY(1)',
                opacity: '1'
            },

            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '0.8rem',
                transform: 'scaleY(0)',
                transformOrigin: 'top',
                opacity: 0,
                backgroundColor: theme.palette.common.blue,
                zIndex: '-99',
                boxShadow: `0rem 2rem 5rem ${theme.palette.darkCerulean}`,
                transition: ' all .2s cubic-bezier(0.215, 0.61, 0.355, 1)'
            }
        },
        link: {
            textDecoration: 'none',
            color: theme.palette.common.white,
            position: 'relative'
        },
        movieImage: {
            minWidth: '100%',
            minHeight: '432px',
            objectFit: 'cover',
            borderRadius: '0.8rem',
            transition: 'all 100ms cubic-bezier(0.645, 0.045, 0.355, 1)',
            boxShadow: '0rem 2rem 5rem black',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.1rem',
            position: 'relative',
        },
        title: {
            textAlign: 'center',
            fontSize: '1.15rem',
            fontWeight: '400',
            color: theme.palette.common.neutral,
            marginTop: '1rem',
            lineHeight: '1.4',
            transition: 'color 300ms cubic-bezier(0.645, 0.045, 0.355, 1)',
        },
        ratingWrapper: {
            position: 'absolute',
            display: 'inline-flex',
            top: -20,
            left: 20
        },
        rating: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white,
            '&::before': {
                content: '""',
                width: '100%',
                height: '100%',
                backgroundColor: theme.palette.common.commonBackground,
                position: 'absolute',
                borderRadius: '50%',
            }
        },
        addFavorite: {
            position: 'absolute',
            top: '3px',
            right: '3px',
            color: theme.palette.link,
            '&:before': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: '50%',
                backgroundColor: 'rgba(76,77,79,0.5)'
            }
        },
        favoriteIcon: {
            zIndex: 1
        }
    })
);

export default useStyles;