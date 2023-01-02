import { combineReducers, legacy_createStore as createStore } from "redux";

import portfolioReducer from "./portfolioReducer";
import messengerReducer from "./messengerReducer";
import albumsReducer from "./albumsReducer";
import feedReducer from "./feedReducer";
import friendsReducer from "./friendsReducer";
import gamesReducer from "./gamesReducer";
import musicReducer from "./musicReducer";

let reducers = combineReducers({
    portfolio: portfolioReducer,
    messenger: messengerReducer,
    albums: albumsReducer,
    feed: feedReducer,
    friends: friendsReducer,
    games: gamesReducer,
    music: musicReducer,
});

let store = createStore(reducers);

export default store;
