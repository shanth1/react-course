import messengerReducer from "../redux/messengerReducer";

let dateStart = new Date("December 10, 202 12:31:00");

let store = {
    _state: {
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
                messenger: {
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
    },
    _callSubscriber(state) {},

    getState() {
        return this._state;
    },
    subscribers(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        messengerReducer(this._state.users.shanth1.messages, action);
        this._callSubscriber(this._state.users.shanth1);
    },
};

export default store;
