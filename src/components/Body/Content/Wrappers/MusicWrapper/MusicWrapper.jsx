import React from "react";
import s from "../../Content.module.css";
import { MusicMenu } from "./MusicMenu/MusicMenu";

export const MusicWrapper = () => {
    return (
        <div className={s.content_wrapper}>
            <div>Music</div>
            <MusicMenu />
        </div>
    );
};
