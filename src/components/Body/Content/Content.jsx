import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AlbumWrapper } from "./Wrappers/AlbumWrapper/AlbumWrapper";
import { ErrorWrapper } from "./Wrappers/ErrorWrapper/ErrorWrapper";
import { FeedWrapper } from "./Wrappers/FeedWrapper/FeedWrapper";
import { FriendsWrapper } from "./Wrappers/FriendsWrapper/FriendsWrapper";
import { GameWrapper } from "./Wrappers/GameWrapper/GameWrapper";
import { MessengerWrapper } from "./Wrappers/MessengerWrapper/MessengerWrapper";
import { MusicWrapper } from "./Wrappers/MusicWrapper/MusicWrapper";
import { PortfolioWrapper } from "./Wrappers/PortfolioWrapper/PortfolioWrapper";

const Content = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/feed" />} />
            <Route
                path="/portfolio"
                portfolio={props.state.portfolio}
                element={<PortfolioWrapper />}
            />
            <Route path="/feed" element={<FeedWrapper />} />
            <Route
                path="/messenger"
                element={
                    <MessengerWrapper
                        dialogs={props.state.messenger.dialogs}
                        dispatch={props.dispatch}
                    />
                }
            />
            <Route
                path="/friends"
                element={<FriendsWrapper friends={props.state.friends} />}
            />
            <Route
                path="/album"
                albums={props.state.albums}
                element={<AlbumWrapper />}
            />
            <Route
                path="/music"
                music={props.state.music}
                element={<MusicWrapper />}
            />
            <Route
                path="/games"
                games={props.state.games}
                element={<GameWrapper />}
            />
            <Route path="*" element={<ErrorWrapper />} />
        </Routes>
    );
};

export default Content;
