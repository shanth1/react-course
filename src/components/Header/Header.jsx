import React from "react";
import Company from "./Company/Company";
import DynamicIsland from "./DynamicIsland//DynamicIsland";

import s from "./Header.module.css";
import Settings from "./Settings/Settings";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_wrapper}>
        <Company />
        <DynamicIsland />
        <Settings />
      </div>
    </header>
  );
};

export default Header;
