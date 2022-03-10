import React from "react";

import BaseNavigate from "../components/navigate/BaseNavigate";
import NavigateMain from "../components/navigate/NavigateMain";
import Stories from "../components/StoriesItem";
import stories1 from "../../../assets/img/stories1.jpg";
import stories2 from "../../../assets/img/stories2.jpg";
import stories3 from "../../../assets/img/stories3.jpg";
import stories4 from "../../../assets/img/stories4.jpg";

const ListStories = () => {
    return (
        <div className="">
            <div className="flex">
                <div>
                    <BaseNavigate>
                        <NavigateMain />
                    </BaseNavigate>
                </div>

                <div className="w-full pt-20">
                    <div
                        className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4"
                        style={{
                            maxWidth: "930px",
                            margin: "0 auto",
                            padding: "0 26px",
                        }}
                    >
                        <Stories
                            imgStory={
                                "https://topshare.vn/wp-content/uploads/2021/10/hinh-anh-anime-ngau-va-cute-18.jpg"
                            }
                            displayName={"Phạm văn hùng"}
                            avatar={stories1}
                            active
                        />
                        <Stories
                            imgStory={
                                "https://hinhnen123.com/wp-content/uploads/2021/06/hinh-anh-anime-nu-18.jpg"
                            }
                            displayName={"Bảo Boss"}
                            avatar={stories2}
                            active
                        />
                        <Stories
                            imgStory={
                                "https://mister-map.com/wp-content/uploads/2021/11/game-anime-1.jpg"
                            }
                            displayName={"Trần tranh tùng"}
                            avatar={stories3}
                            active
                        />
                        <Stories
                            imgStory={
                                "https://i.pinimg.com/736x/c4/95/4c/c4954cf2777ba898de11a07a920e3ec7--black-bikini-anime-images.jpg"
                            }
                            displayName={"Nguyễn mạnh công"}
                            avatar={stories4}
                            active
                        />
                        <Stories
                            imgStory={
                                "https://cf.shopee.vn/file/e3e377e3dd7091a882bd02c11f39940c"
                            }
                            displayName={"Nguyễn mạnh công"}
                            avatar={stories4}
                            active
                        />
                        <Stories
                            imgStory={stories4}
                            displayName={"Nguyễn mạnh công"}
                            avatar={stories4}
                            active
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListStories;
