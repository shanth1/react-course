import store from "./redux/reduxStore";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (store) => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </StoreContext.Provider>
        </React.StrictMode>,
    );
};

rerenderEntireTree(store);
store.subscribe(() => {
    rerenderEntireTree(store);
});
