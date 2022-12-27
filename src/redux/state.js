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

export default state;
