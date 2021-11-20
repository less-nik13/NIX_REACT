import React from 'react';
import { Provider } from "react-redux";

import store from "./redux";
import Routes from "./Routes";
import Alert from "./components/Alert/Alert";

const App = () => {
    return (
        <Provider store={store}>
            <Alert />
            <Routes />
        </Provider>
    );
};

export default App;