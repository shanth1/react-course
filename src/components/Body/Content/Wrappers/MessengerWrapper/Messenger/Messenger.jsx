import React from "react";
import ChatBody from "./ChatBody/ChatBody";
import ChatInputContainer from "./ChatInput/ChatInputContainer";

import s from "./Messenger.module.css";

const Messenger = (props) => {
    return (
        <div className={s.messenger}>
            <div>Header</div>
            <ChatBody messages={props.dialogs[0].messages} />
            <ChatInputContainer
                inputText={props.dialogs[0].input}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Messenger;
