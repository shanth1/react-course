import React from "react";
import ChatBody from "./ChatBody/ChatBody";
import ChatInput from "./ChatInput/ChatInput";

import s from "./Messenger.module.css";

const Messenger = (props) => {
    return (
        <div className={s.messenger}>
            <div>Header</div>
            <ChatBody messages={props.dialog[0].messages} />
            <ChatInput
                newMessage={props.newMessage}
                newMessageText={props.dialog.input}
                updateChatInput={props.updateChatInput}
            />
        </div>
    );
};

export default Messenger;
