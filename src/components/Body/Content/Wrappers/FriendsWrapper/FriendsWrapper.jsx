import React from "react";
import s from "../../Content.module.css";
import { FriendsMenuContainer } from "./FriendsMenu/FriendsMenuContainer";

export const FriendsWrapper = (props) => {
    return (
        <div className={s.content_wrapper}>
            <div>Profiles</div>
            <FriendsMenuContainer />
        </div>
    );
};
