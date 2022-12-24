import React from "react";
import DialogItem from "./DialogItem/DialogItem";

let dialogsData = [
    {
        id: 1,
        name: "Mark",
    },
    {
        id: 2,
        name: "Clara",
    },
    {
        id: 3,
        name: "Max",
    },
];

const MessengerMenu = () => {
    return (
        <div>
            {dialogsData.map((dialog) => (
                <DialogItem dialogItem={dialog} />
            ))}
        </div>
    );
};

export default MessengerMenu;
