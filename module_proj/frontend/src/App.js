import React from 'react';
import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import store from "./redux";
import theme from "./theme";
import Routes from "./Pages";
import Alert from "./components/Alert/Alert";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CssBaseline/>
                <Alert/>
                <Routes/>
            </Provider>
        </ThemeProvider>
    );
};

export default App;
