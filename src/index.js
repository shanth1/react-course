import state, { addMessage } from "./redux/state";
import { rerenderEntireTree } from "./render";

rerenderEntireTree(state, addMessage);
