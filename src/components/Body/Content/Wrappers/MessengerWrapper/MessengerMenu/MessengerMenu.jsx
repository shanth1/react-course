import React from "react";
import DialogItem from "./DialogItem/DialogItem";

const MessengerMenu = (props) => {
    return (
        <div>
            {props.dialogsData.map((dialog) => (
                <DialogItem dialogItem={dialog} />
            ))}
        </div>
    );
};

export default MessengerMenu;
