import React from "react";
import NavButton from "../../../Generic/NavButton";
import s from "../../../Generic/MenuNav.module.css";

const FriendsMenu = (props) => {
    return (
        <div className={s.menu_nav}>
            {props.friends.map((friend) => (
                <NavButton key={friend.id} nickName={friend.nickName} />
            ))}
        </div>
    );
};

export default FriendsMenu;
