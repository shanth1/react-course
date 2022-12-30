import React from "react";
import s from "./ChatInput.module.css";

const ChatInput = (props) => {
    let newMessageRef = React.createRef();

    let newMessage = () => {
        props.newMessage(newMessageRef.current.value);
        newMessageRef.current.value = "";
    };

    let newMessageText = () => {
        let text = newMessageRef.current.value;
        props.updateChatInput(text);
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
