import { connect } from "react-redux";
import FriendsMenu from "./FriendsMenu";

const mapStateToProps = (state) => ({ friends: state.friends });

export const FriendsMenuContainer = connect(mapStateToProps)(FriendsMenu);
