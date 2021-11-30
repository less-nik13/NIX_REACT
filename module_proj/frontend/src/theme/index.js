import { createTheme } from '@mui/material/styles';

import { paletteDark } from './paletteDark';
import typography from './typography';
import ProximaNovaRegular from '../fonts/ProximaNova-Regular.woff';
import ProximaNovaBold from '../fonts/ProximaNova-Regular.woff';

const theme = createTheme({
        palette: paletteDark,
        typography: typography,
        components: {
            MuiCssBaseline: {
                styleOverrides:
                    `@font-face {
                      font-family: 'Proxima Nova';
                      font-display: swap;
                      font-weight: 400;
                      font-style: normal;
                      src: local('ProximaNova-Regular'), url(${ProximaNovaRegular}) format('woff'),
                      }
                    @font-face {
                      font-family: 'Proxima Nova';
                      font-weight: 600;
                      font-style: normal;
                      font-display: swap;
                      src: local('ProximaNova-Semibold'), url(${ProximaNovaBold}) format('woff');
                    }`,
            },
        },
    })
;

export default theme;