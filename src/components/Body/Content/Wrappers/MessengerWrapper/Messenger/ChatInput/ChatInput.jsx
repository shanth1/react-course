import React from "react";
import s from "./ChatInput.module.css";

const ChatInput = (props) => {
    let newMessageRef = React.createRef();
    let newMessage = () => {
        debugger;
        props.addMessage(newMessageRef.current.value);
        console.log("send");
    };
    return (
        <div className={s.chatInput}>
            <input ref={newMessageRef} className={s.input} type="text" />
            <button onClick={newMessage}>send</button>
        </div>
    );
};

export default ChatInput;
