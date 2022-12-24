import React from "react";
import ChatBody from "./ChatBody/ChatBody";
import ChatInput from "./ChatInput/ChatInput";

const Messenger = (props) => {
    return (
        <div className="">
            <ChatBody messages={props.messages} />
            <ChatInput />
        </div>
    );
};

export default Messenger;
