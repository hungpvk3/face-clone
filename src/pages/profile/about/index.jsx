import React from "react";

import "../Profile.scss";
import "./About.scss";
import NavigateAbout from "../components/navigate/NavigateAbout";
import { Outlet } from "react-router-dom";

const Intro = () => {
    return (
        <div className="profile-container">
            <div className="profile-wrapper">
                <div className="profile-main">
                    <div className="profile-about-navigate">
                        <NavigateAbout />
                    </div>
                    <div className="profile-about-main">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
