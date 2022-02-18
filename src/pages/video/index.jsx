import React from "react";

import "./Video.scss";
import Video from "../../components/video";

const VideoPage = () => {
    return (
        <div className="p-video-container flex flex-col gap-5">
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    );
};

export default VideoPage;
