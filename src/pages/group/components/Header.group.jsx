import React from "react";

import "./Header.group.scss";

const Header = () => {
    return (
        <div className="header-group">
            <div className="header-group-conversation">
                <span>Thảo luận</span>
            </div>
            <div className="header-group-search">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Header;
