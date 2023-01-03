import { connect } from "react-redux";
import MessengerMenu from "./MessengerMenu";

const mapStateToProps = (state) => ({
    dialogs: state.messenger.dialogs,
});

const MessengerMenuContainer = connect(mapStateToProps)(MessengerMenu);

export default MessengerMenuContainer;
