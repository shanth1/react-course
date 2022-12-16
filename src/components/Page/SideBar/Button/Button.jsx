import React from "react";
import s from "./Button.module.css";

const Button = (props) => {
    return (
        <div className="btn">
            <img className={s.icon} src={props.icon} alt="" />
            <span className="label">{props.label}</span>
        </div>
    );
};

export default Button;
