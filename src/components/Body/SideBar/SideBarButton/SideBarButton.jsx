import React from "react";
import { NavLink } from "react-router-dom";
import s from "./SideBarButton.module.css";

const SideBarButton = (props) => {
    return (
        <NavLink
            to={props.href}
            className={(navBtn) =>
                navBtn.isActive ? `${s.btn} ${s.active}` : `${s.btn}`
            }
        >
            <div className={s.indicator}></div>
            <img className={s.icon} src={props.icon} alt="" />
            <div className={s.label}>{props.label}</div>
        </NavLink>
    );
};

export default SideBarButton;
