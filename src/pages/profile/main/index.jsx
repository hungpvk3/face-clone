import React from "react";

import "./Main.scss";
import "../Profile.scss";

import { useStore } from "../../../store";
import PostItem from "../../../components/post";
import Intro from "../components/intro";
import Image from "../components/image";
import Friends from "../components/friends";

const Main = () => {
    const { setIsOpenEditDetail } = useStore();

    const handleOpenEditDetails = () => {
        setIsOpenEditDetail(true);
    };

    return (
        <div className="profile-container">
            <div className="profile-wap">
                <div className="profile-main">
                    <div className="profile-introduce">
                        <div
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: "8px",
                                padding: "14px 16px",
                                boxShadow: "0 2px 2px rgb(0 0 0 / 10%)",
                                marginBottom: "12px",
                            }}
                        >
                            <h2 style={{ fontSize: "20px", fontWeight: 600 }}>
                                Giới thiệu
                            </h2>
                            <Intro />
                            <button
                                className="mt-6 py-2 w-full bg-gray-200 font-semibold rounded-md"
                                onClick={handleOpenEditDetails}
                            >
                                Chỉnh sửa chi tiết
                            </button>
                        </div>
                        <Image />
                        <Friends />
                    </div>

                    <div className="profile-posts">
                        <PostItem imgPost="https://cdn.donmai.us/original/b4/1b/__dunkerque_and_dunkerque_azur_lane_drawn_by_aliceblue__b41bb4c8005719ebaf76a8eca36344bc.png" />
                        <PostItem imgPost="https://cdn.donmai.us/original/b4/1b/__dunkerque_and_dunkerque_azur_lane_drawn_by_aliceblue__b41bb4c8005719ebaf76a8eca36344bc.png" />
                        <PostItem imgPost="https://cdn.donmai.us/original/b4/1b/__dunkerque_and_dunkerque_azur_lane_drawn_by_aliceblue__b41bb4c8005719ebaf76a8eca36344bc.png" />
                        <PostItem imgPost="https://cdn.donmai.us/original/b4/1b/__dunkerque_and_dunkerque_azur_lane_drawn_by_aliceblue__b41bb4c8005719ebaf76a8eca36344bc.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
