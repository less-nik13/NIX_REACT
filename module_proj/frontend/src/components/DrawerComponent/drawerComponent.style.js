import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '0'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.common.white,
        textAlign: 'center',
        width: '100%',
        padding: '30px 0',
        transition: 'color .3s ease-in-out',
        '&:hover': {
            color: theme.palette.link
        }
    },
    closeButton: {
        transition: 'color .3s ease-in-out, background .6s ease-in-out',
        color: theme.palette.common.white,
        '&:hover': {
            color: theme.palette.link
        }
    }
}));

export default useStyles;