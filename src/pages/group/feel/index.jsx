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
            <BaseNavigte>
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
                <div className="group-feel-button">Xem them nhom</div>
            </div>
        </div>
    );
};

export default Feel;
