import React from "react";

import toptal from "../../../../assets/img/toptal.jpg";
import "./Image.scss";

const Image = () => {
    return (
        <div className="c-profile-image-container">
            <div className="c-profile-image-heading">
                <div className="profile-head">Ảnh</div>

                <div className="py-2 px-4 rounded-md text-blue-400 cursor-pointer hover:bg-blue-100">
                    Xem tất cả ảnh
                </div>
            </div>

            <ul className="c-profile-image-list">
                <li className="c-profile-image-item">
                    <img
                        src={
                            "https://i.pinimg.com/originals/57/6b/47/576b4778aafcd888eb888553637ee006.jpg"
                        }
                        alt=""
                    />
                </li>
                <li className="c-profile-image-item">
                    <img src={toptal} alt="" />
                </li>
            </ul>
        </div>
    );
};

export default Image;
