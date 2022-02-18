import React from "react";

import "./Home.scss";
import CreatePost from "./components/CreatePost";
import Navigate from "./components/Navigate";
import Contact from "./components/Contact";
import Stories from "../stories/components/StoriesItem";
import PostItem from "../../components/post";
import { ArowRight } from "../../components/icons";

import stories1 from "../../assets/img/crypto.jpg";
import stories2 from "../../assets/img/stories2.jpg";
import stories3 from "../../assets/img/stories3.jpg";
import stories4 from "../../assets/img/stories4.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="home-wrapper">
            <div className="home-container">
                <div className="home-navigate">
                    <Navigate />
                </div>
                <div className="home-main">
                    <div className="home-stories relative">
                        <Stories
                            imgStory={stories1}
                            displayName={"Phạm văn hùng"}
                            avatar={stories1}
                        />
                        <Stories
                            imgStory={stories2}
                            displayName={"Bảo Boss"}
                            avatar={stories2}
                        />
                        <Stories
                            imgStory={stories3}
                            displayName={"Trần tranh tùng"}
                            avatar={stories3}
                        />
                        <Stories
                            imgStory={stories4}
                            displayName={"Nguyễn mạnh công"}
                            avatar={stories4}
                        />
                        <Stories
                            imgStory={stories4}
                            displayName={"Nguyễn mạnh công"}
                            avatar={stories4}
                        />
                        <Link
                            to="stories"
                            className="arow-right absolute -right-5 border shadow w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100"
                        >
                            <ArowRight css="text-gray-600 w-5 h-5" />
                            <span
                                className="absolute truncate -bottom-10 text-white px-3 py-2 see-all"
                                style={{
                                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                                    borderRadius: "10px",
                                    fontSize: "13px",
                                }}
                            >
                                Xem tất cả tin
                            </span>
                        </Link>
                    </div>

                    <div className="home-public-create">
                        <CreatePost />
                    </div>
                    <div className="home-posts">
                        <PostItem imgPost={stories1} link={1} />
                        <PostItem imgPost={stories2} link={2} />
                        <PostItem imgPost={stories1} link={3} />
                    </div>
                </div>
                <div className="home-contact">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
