import React from "react";
import { useLocation } from "react-router-dom";

import logo from "../../../../assets/img/logo.png";
import { X } from "../../../../components/icons";

const BaseNavigte = ({ children }) => {
    let location = useLocation();
    let path = location.pathname.split("/")[2];
    console.log(path);
    return (
        <div
            className={`hidden lg:block sticky top-0`}
            style={{
            
                width: "360px",
                minWidth: "360px",
                backgroundColor: "white",
                height: "100vh",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
        >
            <div
                style={{ height: "56px", padding: "0 16px" }}
                className="flex items-center gap-2 shadow"
            >
                <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center">
                    <X css="h-6 w-6" color="white" />
                </div>
                <img src={logo} alt="" className="w-10 h-10" />
            </div>

            {children}
        </div>
    );
};

export default BaseNavigte;
