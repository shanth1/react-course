import React from "react";
import NavButton from "../../../Generic/NavButton";
import s from "../../../Generic/MenuNav.module.css";

const FeedMenu = () => {
    return (
        <nav className={s.menu_nav}>
            <NavButton label="Подборка" />
            <NavButton label="Фото" />
            <NavButton label="Видео" />
            <NavButton label="Музыка" />
        </nav>
    );
};

export default FeedMenu;
