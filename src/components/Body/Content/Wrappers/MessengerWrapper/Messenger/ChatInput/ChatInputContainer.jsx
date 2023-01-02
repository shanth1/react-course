import React from "react";
import {
    newMessageActionCreator,
    updateChatInputActionCreator,
} from "../../../../../../../redux/messengerReducer";
import ChatInput from "./ChatInput";

const ChatInputContainer = (props) => {
    let renderMessage = (value) => {
        let action = newMessageActionCreator(value);
        props.dispatch(action);
    };

    let renderChatInput = (text) => {
        let action = updateChatInputActionCreator(text);
        props.dispatch(action);
    };
    return (
        <ChatInput
            inputText={props.inputText}
            renderChatInput={renderChatInput}
            renderMessage={renderMessage}
        />
    );
};

export default ChatInputContainer;
