import React from "react";
import s from "../../Content.module.css";
import { GameMenu } from "./GameMenu/GameMenu";

export const GameWrapper = () => {
    return (
        <div className={s.content_wrapper}>
            <div>Game</div>
            <GameMenu />
        </div>
    );
};
