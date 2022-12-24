import React from "react";
import NavButton from "../../../Generic/NavButton";
import s from "../../../Generic/MenuNav.module.css";

export const GameMenu = () => {
    return (
        <nav className={s.menu_nav}>
            <NavButton label="Шахматы" />
            <NavButton label="Стелс" />
        </nav>
    );
};
