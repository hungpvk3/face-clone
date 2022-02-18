import React from "react";

import "./StorieItem.scss";
import { Avatar } from "../../../components/icons";

const Stories = ({ imgStory, displayName, avatar, active }) => {
    return (
        <div className="stories-item-container">
            <div
                className={`stories-item-main ${active ? "storiesActive" : ""}`}
            >
                <div className="stories-item-story">
                    <img src={imgStory} alt="" />
                </div>

                <div className="stories-item-info">
                    <Avatar
                        avatar={avatar}
                        css="w-10 h-10"
                        cssActive="bottom-0 right-0"
                    />
                </div>

                <span className="stories-item-name">{displayName}</span>
            </div>
        </div>
    );
};

export default Stories;
