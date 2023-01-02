const initialState = {
    name: "Denis",
    surname: "Beresnev",
    company: "Company Name",
    posts: [
        { id: 1, title: "hi", bg: "bg", content: "content" },
        { id: 2, title: "hi", bg: "bg", content: "content" },
        { id: 3, title: "hi", bg: "bg", content: "content" },
    ],
};

const portfolioReducer = (state = initialState, action) => {
    return state;
};

export default portfolioReducer;
