import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AlbumWrapper } from "./AlbumWrapper/AlbumWrapper";
import { FeedWrapper } from "./FeedWrapper/FeedWrapper";
import { FriendsWrapper } from "./FriendsWrapper/FriendsWrapper";
import { GameWrapper } from "./GameWrapper/GameWrapper";
import { MessengerWrapper } from "./MessengerWrapper/MeesengerWrapper";
import { MusicWrapper } from "./MusicWrapper/MusicWrapper";
import { PortfolioWrapper } from "./PortfolioWrapper/PortfolioWrapper";

const router = createBrowserRouter([
    {
        path: "/portfolio",
        element: <PortfolioWrapper />,
    },
    {
        path: "/feed",
        element: <FeedWrapper />,
    },
    {
        path: "/messenger",
        element: <MessengerWrapper />,
    },
    {
        path: "/friends",
        element: <FriendsWrapper />,
    },
    {
        path: "/album",
        element: <AlbumWrapper />,
    },
    {
        path: "/music",
        element: <MusicWrapper />,
    },
    {
        path: "/game",
        element: <GameWrapper />,
    },
]);

const Content = () => {
    return <RouterProvider router={router} />;
};

export default Content;
