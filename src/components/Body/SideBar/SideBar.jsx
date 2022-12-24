import React from "react";
import SideBarButton from "./SideBarButton/SideBarButton";
import s from "./SideBar.module.css";

const SideBar = () => {
    return (
        <div className={s.side_bar}>
            <nav className="sections">
                <SideBarButton
                    href="portfolio"
                    icon="https://cdn-icons-png.flaticon.com/64/77/77486.png"
                    label="Портфолио"
                />
                <SideBarButton
                    href="feed"
                    icon="https://cdn-icons-png.flaticon.com/64/77/77686.png"
                    label="Лента"
                />
                <SideBarButton
                    href="messenger"
                    icon="https://cdn-icons-png.flaticon.com/64/77/77506.png"
                    label="Общение"
                />
                <SideBarButton
                    href="friends"
                    icon="https://cdn-icons-png.flaticon.com/64/77/77543.png"
                    label="Друзья"
                />
                <SideBarButton
                    href="album"
                    icon="https://cdn-icons-png.flaticon.com/64/77/77631.png"
                    label="Альбом"
                />
                <SideBarButton
                    href="music"
                    icon="https://cdn-icons-png.flaticon.com/64/77/77632.png"
                    label="Музыка"
                />
                <SideBarButton
                    href="game"
                    icon="https://cdn-icons-png.flaticon.com/64/77/77639.png"
                    label="Игры"
                />
            </nav>
        </div>
    );
};

export default SideBar;
