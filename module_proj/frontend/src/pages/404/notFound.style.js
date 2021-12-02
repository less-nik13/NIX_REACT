import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        // alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
    },
    button: {
        '&:hover': {
            color: theme.palette.link,
            border: `1px solid ${theme.palette.link}`,
        }
    }
}));

export default useStyles;