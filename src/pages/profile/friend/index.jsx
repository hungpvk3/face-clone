import React from "react";

import "../Profile.scss";

import NavigateFriend from "../components/navigate/NavigateFriend";
import FriendItem from "../components/friends/FriendItem";

const Friends = () => {
    return (
        <div className="profile-container">
            <div className="profile-wrapper">
                <NavigateFriend />

                <div className="px-6 pb-6 grid grid-cols-2 gap-3">
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                    <FriendItem />
                </div>
            </div>
        </div>
    );
};

export default Friends;
