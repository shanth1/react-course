import React from "react";
import s from "./ChatInput.module.css";

const ChatInput = () => {
    let newMessageRef = React.createRef();
    const newMessage = () => alert(newMessageRef.current.value);
    return (
        <div className={s.chatInput}>
            <input ref={newMessageRef} className={s.input} type="text" />
            <button onClick={newMessage}>send</button>
        </div>
    );
};

export default ChatInput;
