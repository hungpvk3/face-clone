import React from "react";
import { Link } from 'react-router-dom'

import BaseNavigate from "../components/navigate/BaseNavigate";
import NavigateMain from "../components/navigate/NavigateMain";
import Stories from "../components/StoriesItem";

const ListStories = () => {
    return (
        <div className="">
            <div className="flex">
                <div>
                    <BaseNavigate css="hidden lg:block">
                        <NavigateMain />
                    </BaseNavigate>
                </div>


                <div className="w-full lg:pt-20"  
                    style={{
                        maxWidth: "930px",
                        margin: "0 auto",
                        padding: "0 26px",
                    }}>
                    <div className="my-5 p-2 flex gap-3 items-center bg-white rounded-lg lg:hidden">
                        <button className="flex-1 py-2 px-4 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100">All stories</button>
                        <Link to="my" className="flex-1 py-2 px-4 rounded-lg text-center text-black bg-gray-50 cursor-pointer hover:bg-gray-100 hover:text-black">Create stories</Link>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4"
                    >
                        <Stories
                            imgStory={
                                'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'
                            }
                            displayName={"Phạm văn hùng"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            active
                        />
                        <Stories
                            imgStory={
                                'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'
                            }
                            displayName={"Bảo Boss"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            active
                        />
                        <Stories
                            imgStory={
                                'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'
                            }
                            displayName={"Trần tranh tùng"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            active
                        />
                        <Stories
                            imgStory={
                                "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
                            }
                            displayName={"Nguyễn mạnh công"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            active
                        />
                        <Stories
                            imgStory={
                                'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'
                            }
                            displayName={"Nguyễn mạnh công"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            active
                        />
                        <Stories
                            imgStory={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            displayName={"Nguyễn mạnh công"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            active
                        />
                        <Stories
                            imgStory={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            displayName={"Nguyễn mạnh công"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            active
                        />
                        <Stories
                            imgStory={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            displayName={"Nguyễn mạnh công"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            active
                        />
                        <Stories
                            imgStory={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            displayName={"Nguyễn mạnh công"}
                            avatar={'https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg'}
                            active
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListStories;
