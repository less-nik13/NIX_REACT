import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: theme.palette.pewterBlue,
        transition: 'color .5s ease-in-out',
        fontSize: '18px',
        "&:hover": {
            color: theme.palette.link
        }
    }
}));

export default useStyles;