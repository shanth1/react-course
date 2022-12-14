import React from "react";
import s from "./Company.module.css";

const Company = () => {
  return (
    <div className={s.company_wrapper}>
      <img
        className={s.icon_logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png"
        alt="#"
      />
      <span className={s.company_name}>Вконтакте</span>
    </div>
  );
};

export default Company;
