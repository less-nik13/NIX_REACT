import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    wrapper: {
        marginBottom: '2rem',
        marginLeft: '1rem'
    },
    title: {
        fontWeight: 400,
        lineHeight: '1.2',
        color: theme.palette.isabelline ,
        letterSpacing: '-0.5px',
        textTransform: 'uppercase',
        marginBottom: '0.5rem',
    }
}));

export default useStyles;