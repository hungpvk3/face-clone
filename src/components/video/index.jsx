import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

import "./Video.scss";
import "../post/postItem.scss";
import image from "../../assets/img/stories3.jpg";
import videoURL from "../../assets/img/download.mp4";
import { Avatar, Dot, Play, Pause, VolumMax, MiniPlay } from "../icons";

const VideoItem = () => {
    let likeCout = 100;
    const [isCmt, setIsCmt] = useState(false);
    const [play, setPlay] = useState(true);
    const videoRef = useRef();
    const volumnRef = useRef();
    const progressRef = useRef();
    // const progressBarRef = useRef();
    const progressTimeRef = useRef();
    const progressTimeSecondRef = useRef();
    const progressDurRef = useRef();
    const progressDurSecondRef = useRef();

    useEffect(() => {
        const handleTimeUpdate = (e) => {
            let current = e.target.duration;
            let currentTime = e.target.currentTime;
            progressRef.current.value = `${Math.floor(
                (currentTime / current) * 100
            )}`;

            // progress time video
            progressTimeRef.current.innerHTML = Math.floor(current / 60);
            progressTimeSecondRef.current.innerHTML =
                Math.floor(currentTime % 60) > 9
                    ? Math.floor(currentTime % 60)
                    : `0${Math.floor(currentTime % 60)}`;
        };
        const handleClick = (e) => {
            videoRef.current.currentTime =
                (e.target.value / 100) * videoRef.current.duration;
        };
        const handleLoadeddata = () => {
            progressDurRef.current.innerHTML = Math.floor(
                videoRef.current.duration / 60
            );
            progressDurSecondRef.current.innerHTML =
                Math.floor(videoRef.current.duration % 60) > 9
                    ? Math.floor(videoRef.current.duration % 60)
                    : `0${Math.floor(videoRef.current.duration % 60)}`;
        };
        const handleChangVolumn = (e) => {
            videoRef.current.volume = e.target.value / 100;
        };
        const handleListenPlay = (e) => {
            handlePlay();
        };
        const handleListenPause = (e) => {
            handlePause();
        };
        const handleMouseDown = () => {
            handlePause();
        };
        const handleMouseUp = () => {
            handlePlay();
        };

        videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
        progressRef.current.addEventListener("change", handleClick);
        progressRef.current.addEventListener("mousedown", handleMouseDown);
        progressRef.current.addEventListener("mouseup", handleMouseUp);
        videoRef.current.addEventListener("play", handleListenPlay);
        videoRef.current.addEventListener("pause", handleListenPause);
        videoRef.current.addEventListener("loadeddata", handleLoadeddata);
        volumnRef.current.addEventListener("change", handleChangVolumn);
    }, []);

    const handleComment = () => {
        setIsCmt(!isCmt);
    };

    const handlePlay = () => {
        videoRef.current.play();
        setPlay(false);
    };

    const handlePause = () => {
        videoRef.current.pause();
        setPlay(true);
    };

    return (
        <div
            className="post-container video-main"
            style={{ fontFamily: "Segoe UI" }}
        >
            <div className="post-header">
                <img
                    src="https://cdn.donmai.us/original/5a/76/__hk416_girls_frontline_drawn_by_hiromaster_sinta_jh__5a76b8687822e05471412babcea21512.png"
                    alt=""
                />

                <div className="post-info">
                    <div>
                        <span className="post-info-name">Phạm hùng</span>
                        <span className="post-info-time">5 giờ</span>
                    </div>

                    <div className="post-info-tab">
                        <Dot css="w-5 h-5 text-gray-500" />
                    </div>
                </div>
            </div>

            <div className="post-main">
                <p>
                    🔥 Gunner yêu hãy cùng Gà xem livestream giao lưu cùng
                    Gunner Mạnh Lê để nhận nhiều phần quà hấp dẫn nha 🤩 Nhanh
                    tay tham gia PK và trả lời câu hỏi để nhận quà nàoooooo
                </p>
            </div>

            <div
                className="flex justify-center bg-black relative select-none"
                style={{ height: "468px", width: "100%" }}
            >
                <video
                    ref={videoRef}
                    style={{ height: "100%" }}
                    src={videoURL}
                ></video>
                <div className="video-controll absolute w-full bottom-0 z-59 flex items-center">
                    <div className="flex items-center">
                        {play ? (
                            <div onClick={handlePlay}>
                                <Play css="h-7 w-7 fill-white cursor-pointer" />
                            </div>
                        ) : (
                            <div onClick={handlePause}>
                                <Pause css="h-7 w-7 cursor-pointer" />
                            </div>
                        )}

                        <div className="flex items-center mx-3 text-white text-xs select-none">
                            <span ref={progressTimeRef}>0</span>:
                            <span className="mr-1" ref={progressTimeSecondRef}>
                                00
                            </span>{" "}
                            /{" "}
                            <span className="ml-1" ref={progressDurRef}>
                                5
                            </span>
                            :<span ref={progressDurSecondRef}>30</span>
                        </div>
                    </div>

                    <input
                        type="range"
                        className="video-bars"
                        name=""
                        min="0"
                        max="100"
                        ref={progressRef}
                    />

                    <div className="flex items-center">
                        <div className="ml-5">
                            <MiniPlay css="h-8 w-8" />
                        </div>
                        <div className="mr-2 flex flex-col items-center video-icon">
                            <input
                                ref={volumnRef}
                                type="range"
                                name=""
                                min="0"
                                max="100"
                                step="2"
                                className="video-volumn"
                            />
                            <div className="">
                                <VolumMax css="h-8 w-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mx-4 mt-2 text-gray-600">
                {/* POST ACTION */}
                <ul className="flex items-center">
                    <li className="flex items-center gap-2 py-1.5 px-3 rounded-md cursor-pointer hover:bg-gray-100">
                        <i
                            data-visualcompletion="css-img"
                            className="hu5pjgll m6k467ps opacity-60"
                            style={{
                                backgroundImage: `url(
                                "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/W5lOa7lwuFw.png"
                            )`,
                                backgroundPosition: "0px -222px",
                                // -203
                                backgroundSize: "auto",
                                width: "18px",
                                height: "18px",
                                backgroundRepeat: "no-repeat",
                                display: "inline-block",
                            }}
                        ></i>
                        <span
                            className="font-semibold text-gray-600"
                            style={{ fontSize: "13px" }}
                        >
                            Thích
                        </span>
                    </li>
                    <li
                        className="flex items-center gap-2 py-1.5 px-3 rounded-md cursor-pointer hover:bg-gray-100"
                        onClick={handleComment}
                    >
                        <i
                            data-visualcompletion="css-img"
                            className="hu5pjgll m6k467ps opacity-60"
                            style={{
                                backgroundImage: `url(
                                "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/W5lOa7lwuFw.png"
                            )`,
                                backgroundPosition: "0px -184px",
                                backgroundSize: "auto",
                                width: "18px",
                                height: "18px",
                                backgroundRepeat: "no-repeat",
                                display: "inline-block",
                            }}
                        ></i>
                        <span
                            className="font-semibold text-gray-600"
                            style={{ fontSize: "13px" }}
                        >
                            Bình luận
                        </span>
                    </li>
                    <li className="flex items-center gap-2 py-1.5 px-3 rounded-md cursor-pointer hover:bg-gray-100">
                        <i
                            data-visualcompletion="css-img"
                            className="hu5pjgll m6k467ps opacity-60"
                            style={{
                                backgroundImage: `url(
                                "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/W5lOa7lwuFw.png"
                            )`,
                                backgroundPosition: "0px -241px",
                                backgroundSize: "auto",
                                width: "18px",
                                height: "18px",
                                backgroundRepeat: "no-repeat",
                                display: "inline-block",
                            }}
                        ></i>
                        <span
                            className="font-semibold text-gray-600"
                            style={{ fontSize: "13px" }}
                        >
                            Chia sẻ
                        </span>
                    </li>
                </ul>

                <ul className="flex items-center gap-1">
                    <li className="flex items-center gap-1 cursor-pointer">
                        <img
                            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                            alt=""
                            className="h-5 w-5"
                        />
                        <span className="" style={{ fontSize: "13px" }}>
                            {likeCout}k
                        </span>
                    </li>
                    <span>·</span>
                    <li className="flex items-center gap-1">
                        <p
                            style={{ fontSize: "13px" }}
                            className="flex items-center gap-1 cursor-pointer"
                        >
                            <span style={{ fontSize: "13px" }}>90</span>{" "}
                            <span className="hover:underline decoration-1">
                                comments
                            </span>
                        </p>
                        <span>·</span>
                        <p
                            style={{ fontSize: "12px" }}
                            className="cursor-pointer"
                        >
                            <span
                                style={{ fontSize: "13px" }}
                                className="mr-0.5"
                            >
                                66
                            </span>
                            <span className="hover:underline decoration-1">
                                views
                            </span>
                        </p>
                    </li>
                </ul>
            </div>

            {/* POST COMMENTS */}
            {isCmt ? (
                <div className="post-comment">
                    <Avatar
                        avatar={image}
                        css="w-10 h-10"
                        cssActive="bottom-0 right-0.5"
                    />

                    <input type="text" placeholder="Nhập bình luận..." />
                </div>
            ) : null}
        </div>
    );
};

export default VideoItem;
