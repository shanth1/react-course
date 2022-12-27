import React from "react";
import NavButton from "../../../Generic/NavButton";
import s from "../../../Generic/MenuNav.module.css";

const FriendsMenu = (props) => {
    // debugger;
    return (
        <div className={s.menu_nav}>
            {props.friends.map((friend) => (
                <NavButton label={friend} />
            ))}
        </div>
    );
};

export default FriendsMenu;
