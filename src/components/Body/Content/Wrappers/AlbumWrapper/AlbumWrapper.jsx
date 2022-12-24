import React from "react";
import s from "../../Content.module.css";
import { AlbumMenu } from "./AlbumMenu/AlbumMenu";

export const AlbumWrapper = () => {
    return (
        <div className={s.content_wrapper}>
            <div>Альбом</div>
            <AlbumMenu />
        </div>
    );
};
