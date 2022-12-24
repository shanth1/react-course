import React from "react";
import NavButton from "../../../Generic/NavButton";
import s from "../../../Generic/MenuNav.module.css";

export const AlbumMenu = () => {
    return (
        <nav className={s.menu_nav}>
            <NavButton label="Фото" />
            <NavButton label="Видео" />
            <NavButton label="Музыка" />
        </nav>
    );
};
