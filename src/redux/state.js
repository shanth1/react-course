import { rerenderEntireTree } from "../render";

let date = new Date();

const state2 = {
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
                                text: "Привет!",
                                date: new Date(),
                                sender: "shanth1",
                            },
                            {
                                id: 2,
                                text: "Привет!",
                                date: new Date(),
                                sender: "mark_orlov",
                            },
                            {
                                id: 3,
                                text: "Привет!",
                                date: new Date(),
                                sender: "mark_orlov",
                            },
                        ],
                        input: "",
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

const state = {
    name: "Allen Gomez",
    friends: [
        "Lawrence Williams",
        "Raul Hudson",
        "George Brown",
        "Dennis Snyder",
        "Richard Marsh",
    ],
    dialogs: [
        {
            id: 1,

            name: "Raul Hudson",
            newMessageText: "hihihih2",
            messages: [
                {
                    id: 1,
                    text: "Привет",
                    time: "00:10",
                    sentByMe: true,
                },
                {
                    id: 2,
                    text: "Привет!",
                    time: "07:39",
                    sentByMe: false,
                },
                {
                    id: 3,
                    text: "Как дела?",
                    time: "07:39",
                    sentByMe: false,
                },
                {
                    id: 4,
                    text: "Нормально",
                    time: "09:22",
                    sentByMe: true,
                },
            ],
        },
        {
            id: 2,
            name: "Dennis Snyder",
            messages: [
                {
                    id: 1,
                    text: "Здравствуйте",
                    time: "05:55",
                    sentByMe: false,
                },
                {
                    id: 2,
                    text: "Хотел предложить",
                    time: "05:56",
                    sentByMe: false,
                },
                {
                    id: 3,
                    text: "Услугу",
                    time: "05:58",
                    sentByMe: false,
                },
                {
                    id: 4,
                    text: "В банке",
                    time: "06:32",
                    sentByMe: true,
                },
            ],
        },
    ],
};

export const addMessage = (text) => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    state.dialogs[0].messages.push({
        id: 111,
        text: text,
        time: `${hours}:${minutes}`,
        sentByMe: true,
    });
    rerenderEntireTree(state, addMessage, updateNewMessageText);
};

export const updateNewMessageText = (newText) => {
    state.dialogs[0].newMessageText = newText;
    rerenderEntireTree(state, addMessage, updateNewMessageText);
};

export default state;
