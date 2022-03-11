import React from "react";

import "./Feel.scss";
import BaseNavigte from "../../stories/components/navigate/BaseNavigate";
import NavigateFeel from "../components/NavigateFeel";
import GroupForMe from "../components/GroupForMe";
import Video from "../../../components/video";
import Post from "../../../components/post";

const Feel = () => {
    return (
        <div className="flex">
            <BaseNavigte css="hidden lg:block">
                <NavigateFeel />
            </BaseNavigte>

            <div className="group-feel-main">
                <div className="group-feel-post">
                    <Video />
                    <Post
                        imgPost={
                            "https://thuthuatnhanh.com/wp-content/uploads/2019/04/anh-cute.jpg"
                        }
                    />
                </div>
                <div className="group-feel-groups">
                    <GroupForMe />
                </div>
                <div className="lg:hidden p-2 bg-white rounded-lg flex items-center gap-3">
                    <div className="py-2 px-5 flex-1 rounded-md cursor-pointer text-center hover:bg-gray-50 hover:bg-gray-100">
                        Nhóm quản lí
                    </div>
                    <div className="py-2 px-5 flex-1 rounded-md cursor-pointer text-center hover:bg-gray-50 hover:bg-gray-100">
                       Xem thêm nhóm
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feel;
