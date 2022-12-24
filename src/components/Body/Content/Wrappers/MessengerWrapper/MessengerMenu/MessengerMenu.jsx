import React from "react";
import DialogItem from "./DialogItem/DialogItem";

const MessengerMenu = (props) => {
    return (
        <div>
            {props.dialogs.map((dialog) => (
                <DialogItem dialogItem={dialog} />
            ))}
        </div>
    );
};

export default MessengerMenu;
