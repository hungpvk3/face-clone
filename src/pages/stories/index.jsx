import React from "react";
import { Outlet } from "react-router-dom";

const MainStories = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default MainStories;
