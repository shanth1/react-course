import React from "react";
import ChatBody from "./ChatBody/ChatBody";
import ChatInput from "./ChatInput/ChatInput";

const Messenger = (props) => {
    return (
        <div className="">
            <ChatBody messagesData={props.messagesData} />
            <ChatInput />
        </div>
    );
};

export default Messenger;
