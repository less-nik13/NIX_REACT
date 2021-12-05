import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
    },
    button: {
        border: '1px solid inset',
        '&:hover': {
            color: theme.palette.link,
            border: `1px solid ${theme.palette.link}`,
        }
    },
    message: {
        textAlign: 'center',
        margin: '25px 15px'
    }
}));

export default useStyles;