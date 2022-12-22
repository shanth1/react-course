import React from "react";
import ButtonContent from "../../../ButtonContent/ButtonContent";
import s from "./FeedMenu.module.css";

const FeedMenu = () => {
    return (
        <nav className={s.feed_menu}>
            <ButtonContent label="Подборка" />
            <ButtonContent label="Фото" />
            <ButtonContent label="Видео" />
            <ButtonContent label="Музыка" />
        </nav>
    );
};

export default FeedMenu;
