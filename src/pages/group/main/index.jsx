import React from "react";
import { Avatar } from "antd";

import "./Group.main.scss";
import { Plus, Group, Lock } from "../../../components/icons";
import Header from "../components/Header.group";
import BaseNavigate from "../../stories/components/navigate/BaseNavigate";

const GroupMain = () => {
    return (
        <div className="flex w-full">
            <BaseNavigate>
                <div className="group-main-navigate">
                    <div className="group-main-thumnail">
                        <img
                            src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/270065160_2470177593116127_4881443151514239092_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-5&_nc_sid=8631f5&_nc_ohc=d0mJ1brdi2kAX9SDV-J&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-2BCS3J-HKAdj0DENwiS48BCIJ-XHg6tobOwWiabDyKQ&oe=622DAE1A"
                            alt=""
                            className="group-main-image"
                        />
                    </div>
                    <p className="group-main-me">
                        Nhóm của <span>MixiGaming</span>
                    </p>
                    <div className="group-main-container">
                        <h1 className="group-main-title">Bộ tộc MixiGaming</h1>
                        <div className="group-main-status">
                            <Lock css="h-4 w-4 text-gray-500" />{" "}
                            <span className="group-main-status-desc">
                                Nhóm riêng tư
                            </span>
                            -
                            <span className="group-main-status-members">
                                2.9 triệu thành viên
                            </span>{" "}
                        </div>
                        <Avatar.Group size="large" maxCount={9}>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                            <Avatar>H</Avatar>
                        </Avatar.Group>
                        <div className="group-main-actions">
                            <button className="group-main-enjoy">
                                <Group css="h-4 w-4" />
                                Tham gia nhóm
                            </button>
                            <button className="group-main-invite">
                                <Plus css="h-4 w-4" />
                                <span>Mời</span>
                            </button>
                        </div>
                    </div>
                </div>
            </BaseNavigate>
            <div className="w-full">
                <Header />
            </div>
        </div>
    );
};

export default GroupMain;
