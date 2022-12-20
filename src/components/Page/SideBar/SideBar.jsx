import React from "react";
import Button from "./Button/Button";
import s from "./SideBar.module.css";

const SideBar = () => {
    return (
        <div className={s.side_bar}>
            <nav className="sections">
                <Button
                    icon="https://cdn-icons-png.flaticon.com/64/77/77486.png"
                    label="Портфолио"
                />
                <Button
                    href="feed"
                    icon="https://cdn-icons-png.flaticon.com/64/77/77686.png"
                    label="Лента"
                />
                <Button
                    href="messenger"
                    icon="https://cdn-icons-png.flaticon.com/64/77/77506.png"
                    label="Общение"
                />
                <Button
                    icon="https://cdn-icons-png.flaticon.com/64/77/77543.png"
                    label="Друзья"
                />
                <Button
                    icon="https://cdn-icons-png.flaticon.com/64/77/77631.png"
                    label="Альбом"
                />
                <Button
                    icon="https://cdn-icons-png.flaticon.com/64/77/77632.png"
                    label="Музыка"
                />
                <Button
                    icon="https://cdn-icons-png.flaticon.com/64/77/77639.png"
                    label="Игры"
                />
            </nav>
        </div>
    );
};

export default SideBar;
