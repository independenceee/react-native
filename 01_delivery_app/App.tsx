import React from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/redux/store";
import Navigations from "./src/navigations";

type Props = {};
const App = function () {
    return (
        <Provider store={store}>
            <Navigations />
        </Provider>
    );
};

export default App;
