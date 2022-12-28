import state, { addMessage } from "./redux/state";
import { rerenderEntireTree } from "./render";
import { updateNewMessageText } from "./redux/state";

rerenderEntireTree(state, addMessage, updateNewMessageText);
