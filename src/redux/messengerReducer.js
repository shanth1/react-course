const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_CHAT_INPUT = "UPDATE-CHAT-INPUT";

const dateStart = new Date("December 10, 202 12:31:00");

const initialState = {
    dialogs: [
        {
            companion: "mark_orlov",
            messages: [
                {
                    id: 1,
                    text: "Привет",
                    dateInfo: {
                        hours: dateStart.getHours(),
                        minutes: dateStart.getMinutes(),
                    },
                    sender: "shanth1",
                },
                {
                    id: 2,
                    text: "Привет!",
                    dateInfo: {
                        hours: dateStart.getHours(),
                        minutes: dateStart.getMinutes(),
                    },
                    sender: "mark_orlov",
                },
                {
                    id: 3,
                    text: "Как дела?",
                    dateInfo: {
                        hours: dateStart.getHours(),
                        minutes: dateStart.getMinutes(),
                    },
                    sender: "mark_orlov",
                },
            ],
            input: "",
        },
        {
            companion: "andaburas",
            messages: [
                {
                    id: 1,
                    text: "Здравствуйте!",
                    date: new Date(),
                    sender: "shanth1",
                },
                {
                    id: 2,
                    text: "Добрый вечер",
                    date: new Date(),
                    sender: "andabura",
                },
                {
                    id: 3,
                    text: "Вы кто?",
                    date: new Date(),
                    sender: "andabura",
                },
            ],
            input: "",
        },
    ],
};

const messengerReducer = (state = initialState, action) => {
    let stateCopy = { dialogs: [] };

    state.dialogs.map((dialog) =>
        stateCopy.dialogs.push({ ...dialog, messages: [...dialog.messages] }),
    );
    switch (action.type) {
        case NEW_MESSAGE:
            let date = new Date();

            let hours = date.getHours();
            let minutes = date.getMinutes();

            stateCopy.dialogs[0].messages.push({
                id: 3,
                text: action.messageText,
                dateInfo: {
                    hours: hours,
                    minutes: minutes,
                },
                sender: "shanth1",
            });
            stateCopy.dialogs[0].input = "";
            return stateCopy;
        case UPDATE_CHAT_INPUT:
            stateCopy.dialogs[0].input = action.inputText;
            return stateCopy;
        default:
            return stateCopy;
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
