import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FeedWrapper } from "./FeedWrapper/FeedWrapper";
import { MessengerWrapper } from "./MessengerWrapper/MeesengerWrapper";

const router = createBrowserRouter([
    {
        path: "/feed",
        element: <FeedWrapper />,
    },
    {
        path: "/messenger",
        element: <MessengerWrapper />,
    },
]);

const Content = () => {
    return <RouterProvider router={router} />;
};

export default Content;
