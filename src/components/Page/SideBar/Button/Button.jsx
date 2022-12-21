import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Button.module.css";

const Button = (props) => {
    return (
        <div className="btn">
            <img className={s.icon} src={props.icon} alt="" />
            <a href={props.href} className="label">
                {props.label}
            </a>
        </div>
    );
};

export default Button;
