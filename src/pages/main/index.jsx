import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header";

const HomePage = () => {

    return (
        <div>
            <div>
                <div style={{position: 'fixed', zIndex: '1000', left: '0', width: '68px', top: '56px', height: '100vh', backgroundColor: 'black'}}>
                    <Header />
                </div>
                <div style={{marginLeft: '68px'}}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
