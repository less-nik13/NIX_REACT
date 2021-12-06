import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    addFavorite: {
        position: props => props.position,
        top: props => props.position === 'absolute' && '3px',
        right: props => props.position === 'absolute' && '3px',
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
}));

export default useStyles;
