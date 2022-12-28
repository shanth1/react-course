import React from "react";
import Messenger from "./Messenger/Messenger";
import MessengerMenu from "./MessengerMenu/MessengerMenu";
import s from "../../Content.module.css";

export const MessengerWrapper = (props) => {
    return (
        <div className={s.content_wrapper}>
            <Messenger
                messages={props.dialogs[0].messages}
                newMessageText={props.dialogs[0].newMessageText}
                addMessage={props.addMessage}
                updateNewMessageText={props.updateNewMessageText}
            />
            <MessengerMenu dialogs={props.dialogs} />
        </div>
    );
};
