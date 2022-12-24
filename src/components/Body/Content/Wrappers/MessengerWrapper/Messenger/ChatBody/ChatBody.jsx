import React from "react";
import MessageItem from "./MessageItem/MessageItem";

let messagesData = [
    {
        id: 1,
        text: "m1",
    },
    {
        id: 2,
        text: "m2",
    },
    {
        id: 3,
        text: "m3",
    },
    {
        id: 4,
        text: "m4",
    },
    {
        id: 5,
        text: "m5",
    },
    {
        id: 6,
        text: "m6",
    },
];

const ChatBody = (props) => {
    return (
        <div className="ChatBody">
            {messagesData.map((message) => (
                <MessageItem messageItem={message} />
            ))}
        </div>
    );
};

export default ChatBody;
