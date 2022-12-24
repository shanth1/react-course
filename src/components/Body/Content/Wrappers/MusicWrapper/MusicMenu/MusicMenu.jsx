import React from "react";
import NavButton from "../../../Generic/NavButton";
import s from "../../../Generic/MenuNav.module.css";

export const MusicMenu = () => {
    return (
        <nav className={s.menu_nav}>
            <NavButton label="Моя музыка" />
            <NavButton label="Рекомендации" />
            <NavButton label="Плейлисты" />
            <NavButton label="Подкасты" />
            <NavButton label="Исполнители" />
        </nav>
    );
};
