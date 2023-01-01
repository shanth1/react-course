import React from "react";
import s from "./ChatInput.module.css";

const ChatInput = (props) => {
    let newMessageRef = React.createRef();

    let newMessage = () => {
        let value = newMessageRef.current.value;
        let action = { type: "NEW-MESSAGE", messageText: value };
        props.dispatch(action);
        newMessageRef.current.value = "";
    };

    let newMessageText = () => {
        let text = newMessageRef.current.value;
        let action = { type: "UPDATE-CHAT-INPUT", inputText: text };
        props.dispatch(action);
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
