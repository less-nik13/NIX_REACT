import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    videoWrapper: {
        position: 'relative',
        overflow: 'hidden',
        height: '500px',
        '& > iframe': {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        }
    },
});

export default useStyles;
