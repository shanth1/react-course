import React from "react";
import s from "./NavButton.module.css";

const NavButton = (props) => {
    return (
        <div className={s.btn}>
            <div className={s.label}>{props.label}</div>
        </div>
    );
};

export default NavButton;
