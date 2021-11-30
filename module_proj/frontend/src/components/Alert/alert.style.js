import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    // link: {
    //     textDecoration: 'none',
    //     color: theme.palette.pewterBlue,
    //     transition: 'color .5s ease-in-out',
    //     fontSize: '18px',
    //     "&:hover": {
    //         color: theme.palette.link
    //     }
    // }
    root: {
        position: 'fixed',
        margin: '0 15px;',
        top: '35px',
        left: '0px',
        fontSize: '14px',
        zIndex: 1000
    },
    message: {
        padding: '10px 15px',
        textAlign: 'center'
    },
    error: {
        backgroundColor: '#FC4D4DFF',
        boxShadow: 'rgba(252, 77, 77, 0.5) 0px 3px 8px'
    },
    success: {
        backgroundColor: '#41E15CFF',
        boxShadow: 'rgba(65, 225, 92, 0.5) 0px 3px 8px'
    }
}));

export default useStyles;