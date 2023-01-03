import { connect } from "react-redux";
import {
    newMessageActionCreator,
    updateChatInputActionCreator,
} from "../../../../../../redux/messengerReducer";
import Messenger from "./Messenger";

const mapStateToProps = (state) => ({
    inputText: state.messenger.dialogs[0].input,
    messages: state.messenger.dialogs[0].messages,
});

const mapDispatchToProps = (dispatch) => ({
    renderChatInput: (text) => {
        let action = updateChatInputActionCreator(text);
        dispatch(action);
    },
    renderMessages: (value) => {
        let action = newMessageActionCreator(value);
        dispatch(action);
    },
});

const MessengerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Messenger);

export default MessengerContainer;
