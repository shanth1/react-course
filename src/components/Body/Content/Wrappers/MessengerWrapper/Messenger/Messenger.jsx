import React from "react";
import ChatBody from "./ChatBody/ChatBody";
import ChatInput from "./ChatInput/ChatInput";

import s from "./Messenger.module.css";

const Messenger = (props) => {
    return (
        <div className={s.messenger}>
            <div>Header</div>
            <ChatBody messages={props.messages} />
            <ChatInput
                addMessage={props.addMessage}
                newMessageText={props.newMessageText}
                updateNewMessageText={props.updateNewMessageText}
            />
        </div>
    );
};

export default Messenger;
