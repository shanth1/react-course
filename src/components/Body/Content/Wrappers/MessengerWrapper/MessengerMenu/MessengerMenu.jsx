import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "../../../Generic/MenuNav.module.css";

const MessengerMenu = (props) => {
    return (
        <div className={s.menu_nav}>
            {props.dialogs.map((dialog) => (
                <DialogItem key={dialog.id} companionName={dialog.companion} />
            ))}
        </div>
    );
};

export default MessengerMenu;
