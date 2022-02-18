import React from "react";

const BookMark = ({ css, color = "black", stroke = 2 }) => {
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={css}
                fill="none"
                viewBox="0 0 24 24"
                stroke={color}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={stroke}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
            </svg>
        </div>
    );
};

export default BookMark;
