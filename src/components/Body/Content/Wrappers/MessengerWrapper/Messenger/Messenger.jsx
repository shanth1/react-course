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
                inputText={props.inputText}
                renderMessages={props.renderMessages}
                renderChatInput={props.renderChatInput}
            />
        </div>
    );
};

export default Messenger;
