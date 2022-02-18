import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./NavigateAbout.scss";

const Navs = [
    {
        name: "Tổng quan",
        path: "",
        isActive: undefined,
    },
    {
        name: "Công việc học vấn",
        path: "work",
        isActive: "work",
    },
    {
        name: "Nơi sống",
        path: "places",
        isActive: "places",
    },
    {
        name: "Thông tin cơ bản",
        path: "contact",
        isActive: "contact",
    },
];

const NavigateAbout = () => {
    const location = useLocation();
    const isActive = location.pathname.split("/")[3]
        ? location.pathname.split("/")[3]
        : "";

    return (
        <div className="navigate-about-container">
            <h2 className="profile-head">Giới thiệu</h2>

            <div className="navigate-about-links">
                {Navs.map((nav) => (
                    <NavLink
                        to={nav.path}
                        key={nav.name}
                        className={`${
                            isActive !== nav.path ? "navigate-about-item" : ""
                        } ${
                            isActive === nav.path
                                ? "navigate-about-item-active"
                                : ""
                        }`}
                    >
                        {nav.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default NavigateAbout;
