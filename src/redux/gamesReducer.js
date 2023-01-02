const initialState = {
    chess: {
        elo: 1200,
        history: {},
    },
    horror: {
        lvl: 1,
        rating: 10,
    },
};

const gamesReducer = (state = initialState, action) => {
    return state;
};

export default gamesReducer;
