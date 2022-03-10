import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header";

const MainStories = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div style={{ marginLeft: "68px" }}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainStories;
