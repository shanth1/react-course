import React from "react";
import s from "./ContentPost.module.css";

export const ContentPost = (props) => {
    return (
        <div className={s.content}>
            <div className={s.title}>{props.title}</div>
            <img className={s.img} src={props.img} alt="" />
        </div>
    );
};
