import store from "./redux/reduxStore";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (store) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider value={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
    );
};

rerenderEntireTree(store);
store.subscribe(() => {
    rerenderEntireTree(store);
});
