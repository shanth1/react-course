import React from "react";
import s from "./MessageItem.module.css";

const MessageItem = (props) => {
    let text = props.messageItem.text;
    let hours = props.messageItem.dateInfo.hours;
    let minutes = props.messageItem.dateInfo.minutes;
    let sender = props.messageItem.sender;
    return (
        <div
            className={
                s.messageItem + " " + (sender === "shanth1" ? s.mine : s.his)
            }
        >
            <div>{text}</div>
            <div className={s.date}>{`${hours}:${minutes}`}</div>
        </div>
    );
};

export default MessageItem;
