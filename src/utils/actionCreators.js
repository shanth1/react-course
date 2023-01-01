export const newMessageActionCreator = (value) => ({
    type: "NEW-MESSAGE",
    messageText: value,
});

export const updateChatInputActionCreator = (text) => ({
    type: "UPDATE-CHAT-INPUT",
    inputText: text,
});
