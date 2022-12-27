import React from "react";
import s from "./MessageItem.module.css";

const MessageItem = (props) => {
    let text = props.messageItem.text;
    let time = props.messageItem.time;
    let sentByMe = props.messageItem.sentByMe;

    return (
        <div className={s.messageItem + " " + (sentByMe ? s.mine : s.his)}>
            <div>{text}</div>
            <div className={s.date}>{time}</div>
        </div>
    );
};

export default MessageItem;
