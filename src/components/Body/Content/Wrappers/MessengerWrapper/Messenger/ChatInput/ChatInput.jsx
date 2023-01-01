import React from "react";
import s from "./ChatInput.module.css";
import {
    newMessageActionCreator,
    updateChatInputActionCreator,
} from "../../../../../../../utils/actionCreators";

const ChatInput = (props) => {
    let newMessageRef = React.createRef();

    let newMessage = () => {
        let value = newMessageRef.current.value;
        props.dispatch(newMessageActionCreator(value));
    };

    let newMessageText = () => {
        let text = newMessageRef.current.value;
        props.dispatch(updateChatInputActionCreator(text));
    };
    return (
        <div className={s.chatInput}>
            <input
                onChange={newMessageText}
                value={props.newMessageText}
                ref={newMessageRef}
                className={s.input}
                type="text"
            />
            <button onClick={newMessage}>send</button>
        </div>
    );
};

export default ChatInput;
