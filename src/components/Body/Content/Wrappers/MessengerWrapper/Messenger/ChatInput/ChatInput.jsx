import React from "react";
import s from "./ChatInput.module.css";
import {
    newMessageActionCreator,
    updateChatInputActionCreator,
} from "../../../../../../../utils/actionCreators";

const ChatInput = (props) => {
    let newMessage = () => {
        let value = props.newMessageText;
        props.dispatch(newMessageActionCreator(value));
    };

    let newMessageText = (e) => {
        let text = e.target.value;
        props.dispatch(updateChatInputActionCreator(text));
    };
    return (
        <div className={s.chatInput}>
            <input
                onChange={newMessageText}
                value={props.newMessageText}
                className={s.input}
                type="text"
            />
            <button onClick={newMessage}>send</button>
        </div>
    );
};

export default ChatInput;
