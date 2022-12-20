import React from "react";
import s from "./Button.module.css";

export const Button = (props) => {
    return (
        <div className={s.btn}>
            <div className={s.emoji}>{props.reaction}</div>
        </div>
    );
};
