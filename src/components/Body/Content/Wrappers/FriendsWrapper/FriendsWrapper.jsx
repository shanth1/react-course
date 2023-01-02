import React from "react";
import StoreContext from "../../../../../StoreContext";
import s from "../../Content.module.css";
import FriendsMenu from "./FriendsMenu/FriendsMenu";

export const FriendsWrapper = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let friends = store.getState().friends;
                return (
                    <div className={s.content_wrapper}>
                        <div>Profiles</div>
                        <FriendsMenu friends={friends} />
                    </div>
                );
            }}
        </StoreContext.Consumer>
    );
};
