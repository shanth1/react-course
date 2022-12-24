import React from "react";
import MessageItem from "./MessageItem/MessageItem";

const ChatBody = (props) => {
    return (
        <div className="ChatBody">
            {props.messagesData.map((message) => (
                <MessageItem messageItem={message} />
            ))}
        </div>
    );
};

export default ChatBody;
