import React from "react";
import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";

import s from "./Page.module.css";

const Page = () => {
    return (
        <div className={s.page}>
            <div className={s.page_wrapper}>
                <SideBar />
                <Content />
            </div>
        </div>
    );
};

export default Page;
