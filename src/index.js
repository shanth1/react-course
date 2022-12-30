import { state, newMessage, updateChatInput } from "./redux/state";
import { subscribers } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
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

rerenderEntireTree(state.users.shanth1);
subscribers(rerenderEntireTree);
