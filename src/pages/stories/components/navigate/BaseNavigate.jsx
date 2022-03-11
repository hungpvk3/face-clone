import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import { X } from "../../../../components/icons";

const BaseNavigte = ({ css, style, children }) => {
    let location = useLocation();
    let path = location.pathname.split("/")[1];
    console.log(path);
    return (
        <div
            className={`lg:sticky lg:top-0 lg:w-[360px] lg:h-[100vh] bg-white ${css}`}
            style={{
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
        >
            {path === "stories" || path === "my" ? (
                <div
                    className="flex items-center gap-2 shadow h-[56px] px-[16px]"
                >
                    <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center">
                        <X css="h-6 w-6" color="white" />
                    </div>
                </div>
            ) : null}

            {children}
        </div>
    );
};

BaseNavigte.propTypes = {
    css: PropTypes.string,
    children: PropTypes.element,
    style: PropTypes.string
}

export default BaseNavigte;
