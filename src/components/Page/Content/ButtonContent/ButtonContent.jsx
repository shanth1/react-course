import React from "react";
import s from "./ButtonContent.module.css";

const ButtonContent = (props) => {
    return (
        <div className={s.btn}>
            <div className={s.label}>{props.label}</div>
        </div>
    );
};

export default ButtonContent;
