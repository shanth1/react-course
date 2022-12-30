import { state, newMessage, updateChatInput } from "./redux/state";
import { rerenderEntireTree } from "./render";

rerenderEntireTree(state.users.shanth1, newMessage, updateChatInput);
