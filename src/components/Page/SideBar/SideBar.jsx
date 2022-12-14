import React from "react";
import s from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={s.side_bar}>
      <nav className="sections">
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77486.png"
            alt=""
          />
          <span className="label">Портфолио</span>
        </div>
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77686.png"
            alt=""
          />
          <span className="label">Лента</span>
        </div>
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77506.png"
            alt=""
          />
          <span className="label">Общение</span>
        </div>
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77543.png"
            alt=""
          />
          <span className="label">Друзья</span>
        </div>
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77631.png"
            alt=""
          />
          <span className="label">Альбом</span>
        </div>
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77632.png"
            alt=""
          />
          <span className="label">Музыка</span>
        </div>
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77639.png"
            alt=""
          />
          <span className="label">Игры</span>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
