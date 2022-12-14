import React from "react";

import s from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={s.settings}>
      <img
        className={s.icon_settings}
        src="https://cdn-icons-png.flaticon.com/256/7420/7420967.png"
        alt="#"
      />
    </div>
  );
};

export default Settings;
