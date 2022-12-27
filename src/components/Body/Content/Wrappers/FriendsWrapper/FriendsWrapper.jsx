import React from "react";
import s from "../../Content.module.css";
import FriendsMenu from "./FriendsMenu/FriendsMenu";

export const FriendsWrapper = (props) => {
    return (
        <div className={s.content_wrapper}>
            <div>Profiles</div>
            <FriendsMenu friends={props.friends} />
        </div>
    );
};
