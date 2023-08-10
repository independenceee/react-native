import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navigations from "./navigations";

type Props = {};
const App = function () {
    return (
        <Provider store={store}>
            <Navigations />
        </Provider>
    );
};

export default App;
