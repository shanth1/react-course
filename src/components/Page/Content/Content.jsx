import React from "react";
import { Routes, Route } from "react-router-dom";
import { AlbumWrapper } from "./AlbumWrapper/AlbumWrapper";
import { FeedWrapper } from "./FeedWrapper/FeedWrapper";
import { FriendsWrapper } from "./FriendsWrapper/FriendsWrapper";
import { GameWrapper } from "./GameWrapper/GameWrapper";
import { MessengerWrapper } from "./MessengerWrapper/MeesengerWrapper";
import { MusicWrapper } from "./MusicWrapper/MusicWrapper";
import { PortfolioWrapper } from "./PortfolioWrapper/PortfolioWrapper";

const Content = () => {
    return (
        <Routes>
            <Route path="/portfolio" element={<PortfolioWrapper />} />
            <Route path="/feed" element={<FeedWrapper />} />
            <Route path="/messenger" element={<MessengerWrapper />} />
            <Route path="/friends" element={<FriendsWrapper />} />
            <Route path="/album" element={<AlbumWrapper />} />
            <Route path="/music" element={<MusicWrapper />} />
            <Route path="/game" element={<GameWrapper />} />
        </Routes>
    );
};

export default Content;
