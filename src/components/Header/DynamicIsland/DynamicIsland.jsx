import React from "react";
import s from "./DynamicIsland.module.css";

const DynamicIsland = () => {
  return (
    <div className={s.dynamic_island}>
      <div className="search">
        <div className="label invert">Поиск</div>
      </div>
    </div>
  );
};

export default DynamicIsland;
