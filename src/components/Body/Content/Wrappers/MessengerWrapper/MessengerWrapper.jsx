import React from "react";
import Messenger from "./Messenger/Messenger";
import MessengerMenu from "./MessengerMenu/MessengerMenu";
import s from "../../Content.module.css";
import StoreContext from "../../../../../StoreContext";

export const MessengerWrapper = (props) => {
    debugger;
    return (
        <StoreContext.Consumer>
            {(store) => {
                debugger;
                const dialogs = store.getState().messenger.dialogs;
                const dispatch = store.dispatch;
                return (
                    <div className={s.content_wrapper}>
                        <Messenger dialogs={dialogs} dispatch={dispatch} />
                        <MessengerMenu dialogs={dialogs} />
                    </div>
                );
            }}
        </StoreContext.Consumer>
    );
};
