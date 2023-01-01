import React from "react";
import Messenger from "./Messenger/Messenger";
import MessengerMenu from "./MessengerMenu/MessengerMenu";
import s from "../../Content.module.css";

export const MessengerWrapper = (props) => {
    return (
        <div className={s.content_wrapper}>
            <Messenger dialog={props.dialogs} dispatch={props.dispatch} />
            <MessengerMenu dialogs={props.dialogs} />
        </div>
    );
};
