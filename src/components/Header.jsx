import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="company_wrapper">
          <img
            className="icon_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png"
            alt="#"
          />
          <span className="company-name">Вконтакте</span>
        </div>
        <div className="dynamic_island">
          <div className="search">
            <div className="label invert">Поиск</div>
          </div>
        </div>
        <div className="settings">
          <img
            className="icon_settings"
            src="https://cdn-icons-png.flaticon.com/256/7420/7420967.png"
            alt="#"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
