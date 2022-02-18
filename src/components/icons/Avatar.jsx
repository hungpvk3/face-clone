import React from "react";

const Avatar = ({ avatar, css, cssActive }) => {
    return (
        <div className={`relative border border-gray-300 rounded-full ${css}`}>
            <img
                src={avatar}
                alt=""
                className="w-full h-full rounded-full object-cover"
            />
            <div
                className={`absolute h-2 w-2 rounded-full bg-green-600 ${cssActive}`}
            ></div>
        </div>
    );
};

export default Avatar;
