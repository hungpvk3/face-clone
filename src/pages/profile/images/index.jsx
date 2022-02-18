import React from "react";
import { Popover } from "antd";

import "./Image.scss";
import { Dot } from "../../../components/icons";
import ImageItem from "../components/image/ImageItem";

const Images = () => {
    return (
        <div className="profile-container">
            <div className="profile-wrapper">
                <div className="profile-image-heading">
                    <h2 className="profile-head">Ảnh</h2>
                    <button>
                        <Popover
                            placement="bottomRight"
                            content={
                                <div className="px-5 py-2 rounded-md font-semibold text-gray-600 cursor-pointer hover:bg-gray-200">
                                    Thêm ảnh
                                </div>
                            }
                            trigger="click"
                        >
                            <div className="h-9 w-12 bg-gray-200 rounded-md flex justify-center items-center">
                                <Dot css="h-4 w-4" />
                            </div>
                        </Popover>
                    </button>
                </div>

                <div className="profile-image-list">
                    <ImageItem image="https://topshare.vn/wp-content/uploads/2021/10/hinh-anh-anime-ngau-va-cute-18.jpg" />
                    <ImageItem image="https://symbols.vn/wp-content/uploads/2021/12/Tang-ban-hinh-Anime-goi-cam-mac-bikini-quyen-ru.jpg" />
                    <ImageItem image="https://i.pinimg.com/236x/30/8e/0e/308e0e26a5c0cb9a49dea7d8c5a0640b.jpg" />
                    <ImageItem image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ITs0vwqozOrTXDwRcgJh8mU1VQQMcLSmLiIrs-nlUuQ0_63hrP77BckuRaqSTAGXaJk&usqp=CAU" />
                    <ImageItem image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDeJYwxgWbDPZcBTX7kPT30NlBZQaPmhZehlTe7m7rdUNv37ucQJ6ufgrPWwPgM9uRiM&usqp=CAU" />
                    <ImageItem image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNU7iGKPFORvHtCc7KwSnGN7_NwXGAiPunT63AM7F1aZxVL6PPikzpGld7uZ9g6aXYyqE&usqp=CAU" />
                </div>
            </div>
        </div>
    );
};

export default Images;
