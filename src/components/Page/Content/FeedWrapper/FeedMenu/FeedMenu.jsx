import React from "react";
import s from "./FeedMenu.module.css";

const FeedMenu = () => {
  return (
    <div className={s.feed_menu}>
      <nav className="categories">
        <div className="btn">
          <div className="label">Подборка</div>
        </div>
        <div className="btn">
          <div className="label">Фото</div>
        </div>
        <div className="btn">
          <div className="label">Видео</div>
        </div>
        <div className="btn">
          <div className="label">Музыка</div>
        </div>
      </nav>
    </div>
  );
};

export default FeedMenu;
