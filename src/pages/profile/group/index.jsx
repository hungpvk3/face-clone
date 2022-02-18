import React from "react";
import { NavLink } from "react-router-dom";

import "../Profile.scss";
import "./Group.scss";
import GroupItem from "../components/group/GroupItem";

const Group = ({ sk }) => {
    return (
        <div className="profile-container">
            <div className="profile-wrapper">
                <h2
                    className="profile-head"
                    style={{
                        padding: "12px 0",
                    }}
                >
                    Nhóm
                </h2>

                <div className="profile-group-react">
                    <NavLink to={"groups"} className={`profile-group-item`}>
                        Công khai
                    </NavLink>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                    <GroupItem />
                    <GroupItem />
                </div>
            </div>
        </div>
    );
};

export default Group;
