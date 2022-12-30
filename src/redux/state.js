import { rerenderEntireTree } from "../render";

let dateStart = new Date();

export const state = {
    users: {
        shanth1: {
            passInfo: {
                phone: "79048483502",
                email: "shanthi.bunch@gmail.com",
                password: "qwe123",
            },
            portfolio: {
                name: "Denis",
                surname: "Beresnev",
                company: "Company Name",
                posts: [
                    { id: 1, title: "hi", bg: "bg", content: "content" },
                    { id: 2, title: "hi", bg: "bg", content: "content" },
                    { id: 3, title: "hi", bg: "bg", content: "content" },
                ],
            },
            messages: {
                dialogs: {
                    mark_orlov: {
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
                        input: "Test",
                    },
                    andabura: {
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
                },
            },
            friends: ["mark_orlov", "sara_li", "oleg_lsp", "andabura"],
            albums: {
                photo: [],
                video: [],
                music: [],
            },
            music: [],
            games: {
                chess: {
                    elo: 1200,
                    history: {},
                },
                horror: {
                    lvl: 1,
                    rating: 10,
                },
            },
        },
    },
};

export const newMessage = (text) => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    state.users.shanth1.messages.dialogs.mark_orlov.messages.push({
        id: 3,
        text: text,
        dateInfo: {
            hours: hours,
            minutes: minutes,
        },
        sender: "shanth1",
    });
    rerenderEntireTree(state.users.shanth1, newMessage, updateChatInput);
};

export const updateChatInput = (newText) => {
    state.users.shanth1.messages.dialogs.mark_orlov.input = newText;
    rerenderEntireTree(state.users.shanth1, newMessage, updateChatInput);
};
