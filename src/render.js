import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state, addMessage) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addMessage={addMessage} />
            </BrowserRouter>
        </React.StrictMode>,
    );
};

rerenderEntireTree();
