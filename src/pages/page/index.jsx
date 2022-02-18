import React from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";

import "./Page.scss";
import ThumbNail from "./components/thumbnail";
import Video from "./components/video.component";
import VideoItem from "../../components/video";
import Intro from "./components/intro.component";

const Page = () => {
    const { page } = useParams();
    const path = useLocation().pathname.split("/")[1];
    console.log(path);
    return (
        <div className="" style={{ fontFamily: "Segoe UI Historic" }}>
            {page === "hungpv" ? (
                <div>
                    <div className="w-full h-max bg-white shadow">
                        <ThumbNail />
                    </div>
                    <div className="flex gap-3 page-video-main">
                        {path === "watch" ? (
                            <div className="page-video-wrapper mx-auto">
                                <div className="page-video-container bg-white shadow 2xl:mx-auto">
                                    <h1 className="page-video-title mb-4">
                                        Tất cả video
                                    </h1>
                                    <div className="grid grid-cols-3 gap-2">
                                        <Video />
                                        <Video />
                                        <Video />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex gap-5">
                                <div className="hidden xl:block w-96">
                                    <Intro />
                                </div>
                                <div className="flex flex-col gap-5">
                                    <VideoItem />
                                    <VideoItem />
                                    <VideoItem />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <Navigate to="notfound" />
            )}
        </div>
    );
};

export default Page;
