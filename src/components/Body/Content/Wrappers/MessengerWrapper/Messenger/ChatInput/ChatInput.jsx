import React from "react";
import s from "./ChatInput.module.css";

const ChatInput = (props) => {
    let sendMessage = () => {
        let value = props.inputText;
        props.renderMessages(value);
    };

    let updateInput = (e) => {
        let text = e.target.value;
        props.renderChatInput(text);
    };
    return (
        <div className={s.chatInput}>
            <input
                onChange={updateInput}
                value={props.inputText}
                className={s.input}
                type="text"
            />
            <button onClick={sendMessage}>send</button>
        </div>
    );
};

export default ChatInput;
