import React from "react";

const Play = ({ css }) => {
    return (
        <div>
            <svg
                height="100%"
                version="1.1"
                viewBox="0 0 36 36"
                width="100%"
                className={`h-5 w-5 fill-white ${css}`}
            >
                <path
                    className="ytp-svg-fill"
                    d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
                    id="ytp-id-135"
                ></path>
            </svg>
        </div>
    );
};

export default Play;
