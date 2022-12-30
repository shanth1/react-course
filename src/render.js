import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state, newMessage, updateChatInput) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    newMessage={newMessage}
                    updateChatInput={updateChatInput}
                />
            </BrowserRouter>
        </React.StrictMode>,
    );
};

rerenderEntireTree();
