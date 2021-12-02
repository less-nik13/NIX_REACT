import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    wrapper: {
        padding: '15px 25px',
    },
    button: {
        padding: '8px 15px',
        fontSize: '16px',
        border: `1px solid ${theme.palette.common.blue}`,
        transition: 'all .4s ease-in-out',
        '&:hover': {
            color: theme.palette.link,
            border: `1px solid ${theme.palette.link}`,
        }
    },
    identifier: {
        fontSize: '15px',
        fontWeight: '600'
    },
    header: {
        width: '100%',
        fontSize: '20px',
        color: theme.palette.common.blue
    }
}));

export default useStyles;