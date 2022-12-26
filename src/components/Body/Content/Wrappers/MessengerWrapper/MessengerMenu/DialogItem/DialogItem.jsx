import React from "react";
import NavButton from "../../../../Generic/NavButton";

const DialogItem = (props) => {
    return <NavButton label={props.dialogItem.name} />;
};

export default DialogItem;
