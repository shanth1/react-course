import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let dialogsData = [
    {
        id: 1,
        name: "Mark",
    },
    {
        id: 2,
        name: "Clara",
    },
    {
        id: 3,
        name: "Max",
    },
    {
        id: 4,
        name: "Sara",
    },
];

let messagesData = [
    {
        id: 1,
        text: "m1",
    },
    {
        id: 2,
        text: "m2",
    },
    {
        id: 3,
        text: "m3",
    },
    {
        id: 4,
        text: "m4",
    },
    {
        id: 5,
        text: "m5",
    },
    {
        id: 6,
        text: "m6",
    },
    {
        id: 7,
        text: "m7",
    },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App messagesData={messagesData} dialogsData={dialogsData} />
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
