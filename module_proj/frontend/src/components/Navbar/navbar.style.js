import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    logoLink: {
        textDecoration: 'none',
        cursor: 'pointer',
        fontSize: 0
    },
    list: {
        display: 'flex',
    },
    listItem: {
        textAlign: 'center',
        width: 'auto',
        margin: '0 10px',
        transition: 'background .5s ease-in-out',
    },
    link: {
        display: 'block',
        textDecoration: 'none',
        color: theme.palette.common.white,
        padding: '5px 10px',
        transition: 'color .3s ease-in-out',
        '&:hover': {
            color: theme.palette.link
        },
    },
}));

export default useStyles;