import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "../../../Generic/MenuNav.module.css";

const MessengerMenu = (props) => {
    return (
        <div className={s.menu_nav}>
            <DialogItem dialogItem={{ name: "Исправить" }} />
        </div>
    );
};

export default MessengerMenu;
