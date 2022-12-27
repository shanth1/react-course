import React from "react";
import MessageItem from "./MessageItem/MessageItem";
import s from "./ChatBody.module.css";

const ChatBody = (props) => {
    return (
        <div className={s.chatBody}>
            {props.messages.map((message) => (
                <MessageItem messageItem={message} />
            ))}
        </div>
    );
};

export default ChatBody;
