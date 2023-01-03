import React from "react";
import s from "../../Content.module.css";
import MessengerContainer from "./Messenger/MessengerContainer";
import MessengerMenuContainer from "./MessengerMenu/MessengerMenuContainer";

export const MessengerWrapper = (props) => {
    return (
        <div className={s.content_wrapper}>
            <MessengerContainer />
            <MessengerMenuContainer />
        </div>
    );
};
