import store from "./redux/state";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={store.getState().users.shanth1}
                    newMessage={store.newMessage.bind(store)}
                    updateChatInput={store.updateChatInput.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
    );
};

rerenderEntireTree(store.getState().users.shanth1);
store.subscribers(rerenderEntireTree);
