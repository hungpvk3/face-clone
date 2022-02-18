import React from "react";
import { Outlet } from "react-router-dom";

import "./Watch.scss";
import BaseNavigate from "../stories/components/navigate/BaseNavigate";
import WatchNavigate from "./components/navigate/WatchNavigate";

const WatchPage = () => {
    return (
        <div className="watch-container flex">
            <BaseNavigate>
                <WatchNavigate />
            </BaseNavigate>

            <div className="pt-14 w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default WatchPage;
