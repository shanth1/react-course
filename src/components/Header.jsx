import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="company-wrapper">
          <img
            className="icon-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png"
            alt="#"
          />
          <div className="company-name">Вконтакте</div>
        </div>
        <div className="dynamic-island">
          <div className="search">Поиск</div>
        </div>
        <div className="settings">
          <img
            className="icon-settings"
            src="https://cdn-icons-png.flaticon.com/256/7420/7420967.png"
            alt="#"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
