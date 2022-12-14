import React from "react";

const SideBar = () => {
  return (
    <div className="side-bar">
      <nav className="sections">
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77486.png"
            alt=""
          />
          <div className="label">Портфолио</div>
        </div>
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77686.png"
            alt=""
          />
          <div className="label">Лента</div>
        </div>
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77506.png"
            alt=""
          />
          <div className="label">Общение</div>
        </div>
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77543.png"
            alt=""
          />
          <div className="label">Друзья</div>
        </div>
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77631.png"
            alt=""
          />
          <div className="label">Альбом</div>
        </div>
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77632.png"
            alt=""
          />
          <div className="label">Музыка</div>
        </div>
        <div className="btn">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/64/77/77639.png"
            alt=""
          />
          <div className="label">Игры</div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
