import React, {useEffect} from "react";

import "./Home.scss";
import CreatePost from "./components/CreatePost";
import Navigate from "./components/Navigate";
import Contact from "./components/Contact";
import Stories from "../stories/components/StoriesItem";
import PostItem from "../../components/post";
import { ArowRight } from "../../components/icons";
import {UserModel} from '../../models/user'

import stories1 from "../../assets/img/crypto.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
    useEffect(() => {
        const handleGetUser = async () => {
          const response = await UserModel.getUser();
    
          console.log(response);
        };
    
        handleGetUser();
      }, []);

    return (
        <div className="home-wrapper">
            <div className="home-container">
                <div className="home-navigate">
                    <Navigate />
                </div>
                <div className="home-main">
                    <div className="relative grid grid-cols-4 gap-1 sm:grid-cols-5 sm:gap-2">
                        <Stories
                            imgStory={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            displayName={"Phạm văn hùng"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                        />
                        <Stories
                            imgStory={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            displayName={"Bảo Boss"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                        />
                        <Stories
                            imgStory={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            displayName={"Trần tranh tùng"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                        />
                        <Stories
                            imgStory={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            displayName={"Nguyễn mạnh công"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                        />
                        <div className="hidden sm:block"> 
                            <Stories
                                imgStory={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                                displayName={"Nguyễn mạnh công"}
                                avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            />
                        </div>
                        <Link
                            to="stories"
                            className="arow-right absolute -right-5 top-1/2 -translate-y-1/2 border shadow w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100"
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
                        <PostItem imgPost={stories1} link={2} />
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
