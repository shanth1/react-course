const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_CHAT_INPUT = "UPDATE-CHAT-INPUT";

const messengerReducer = (state, action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            let date = new Date();

            let hours = date.getHours();
            let minutes = date.getMinutes();

            state.dialogs[0].messages.push({
                id: 3,
                text: action.messageText,
                dateInfo: {
                    hours: hours,
                    minutes: minutes,
                },
                sender: "shanth1",
            });
            state.dialogs[0].input = "";
            return state;
        case UPDATE_CHAT_INPUT:
            state.dialogs[0].input = action.inputText;
            return state;
        default:
            return state;
    }
};

export const newMessageActionCreator = (value) => ({
    type: "NEW-MESSAGE",
    messageText: value,
});

export const updateChatInputActionCreator = (text) => ({
    type: "UPDATE-CHAT-INPUT",
    inputText: text,
});

export default messengerReducer;
