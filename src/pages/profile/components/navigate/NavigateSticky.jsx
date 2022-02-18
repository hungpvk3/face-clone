import React, { useState } from "react";
import { Popover } from "antd";
import { NavLink, useLocation } from "react-router-dom";

import "./NavigateSticky.scss";
import { useStore } from "../../../../store";
import { Arow } from "../../../../components/icons";

const Navigate = () => {
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    const isActive = location.pathname.split("/")[2]
        ? location.pathname.split("/")[2]
        : "";
    const { setIsOpenEditProfile } = useStore();
    const handleOpenEditProfile = () => {
        setIsOpenEditProfile(true);
    };
    const handleVisibleChange = (visible) => {
        setVisible(visible);
    };

    return (
        <div className="navigate-sticky">
            <div className="navigate-sticky-profile">
                <ul className="navigate-sticky-react">
                    <NavLink
                        to={""}
                        className={`navigate-sticky-item ${
                            isActive === "" ? "sticky-item-active" : ""
                        }`}
                    >
                        Bài viết
                    </NavLink>
                    <NavLink
                        to={"about"}
                        className={`navigate-sticky-item ${
                            isActive === "about" ? "sticky-item-active" : ""
                        }`}
                    >
                        Giới thiệu
                    </NavLink>
                    <NavLink
                        to={"friends"}
                        className={`navigate-sticky-item ${
                            isActive === "friends" ? "sticky-item-active" : ""
                        }`}
                    >
                        Bạn bè
                    </NavLink>
                    <NavLink
                        to={"images"}
                        className={`navigate-sticky-item ${
                            isActive === "images" ? "sticky-item-active" : ""
                        }`}
                    >
                        Ảnh
                    </NavLink>
                    <NavLink
                        to={"groups"}
                        className={`navigate-sticky-item ${
                            isActive === "groups" ? "sticky-item-active" : ""
                        }`}
                    >
                        Nhóm
                    </NavLink>
                    <Popover
                        content={<div>No</div>}
                        title="Title"
                        trigger="click"
                        placement="bottom"
                        visible={visible}
                        onVisibleChange={handleVisibleChange}
                        className={`flex items-center gap-0.5 navigate-sticky-item ${
                            isActive === "groups" ? "sticky-item-active" : ""
                        }`}
                    >
                        <button>Xem thêm</button>
                        <Arow style={{ transform: "translate(0, 1px)" }} />
                    </Popover>
                </ul>

                <ul className="navigate-sticky-btns">
                    <li className="navigate-sticky-btns-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fillRule="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>Thêm vào tin</span>
                    </li>

                    <li
                        className="navigate-sticky-btns-item"
                        onClick={handleOpenEditProfile}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fillRule="currentColor"
                        >
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>

                        <span>Chỉnh sửa trang cá nhân</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigate;
