import React from "react";
import Feed from "./Feed/Feed";
import FeedMenu from "./FeedMenu/FeedMenu";

import s from "../../Content.module.css";

export const FeedWrapper = () => {
    return (
        <div className={s.content_wrapper}>
            <Feed />
            <FeedMenu />
        </div>
    );
};
