import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    paginationWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '35px 0',
        '@media (max-width: 445px)': {
            flexDirection: 'column',
        }
    },
    goTo: {
        display: 'block',
        marginLeft: '20px',
        '@media (max-width: 445px)': {
            marginTop: '20px',
        },
    },

});

export default useStyles;