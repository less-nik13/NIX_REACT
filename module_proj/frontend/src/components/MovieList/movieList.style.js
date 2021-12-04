import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
        listWrapper: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 30rem))',
            justifyContent: 'space-evenly',
            alignContent: 'space-between',
            alignItems: 'start',
            padding: '1rem 0',
            gridGap: '4rem 1rem',
            '@media (min-width: 767px)': {
                gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 20rem))',
                justifyContent: 'space-around',
                gridGap: '4rem 1.5rem',
            },
            '@media (min-width: 991px)': {
                gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 18rem))',
                gridGap: '4rem 2rem',
            }
        },
    })
;

export default useStyles;