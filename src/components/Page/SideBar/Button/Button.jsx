import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Button.module.css";

const Button = (props) => {
    return (
        <div className="btn">
            <img className={s.icon} src={props.icon} alt="" />
            <NavLink to={props.href}>{props.label}</NavLink>
        </div>
    );
};

export default Button;
