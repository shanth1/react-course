import React from "react";
import s from "./Header.module.css";
export const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.avatar}>
                <img className={s.img} src={props.avatar} alt="" />
            </div>
            <div className={s.author}>{props.author}</div>
        </div>
    );
};
