import React from "react";
import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";

import s from "./Body.module.css";

const Body = (props) => {
    return (
        <div className={s.body}>
            <div className={s.body_wrapper}>
                <SideBar />
                <Content
                    state={props.state}
                    addMessage={props.addMessage}
                    updateNewMessageText={props.updateNewMessageText}
                />
            </div>
        </div>
    );
};

export default Body;
