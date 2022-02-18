import React from "react";

import toptal from "../../../../assets/img/toptal.jpg";
import "./Friends.scss";

const Friends = () => {
    return (
        <div className="profile-friend-container">
            <div className="profile-friend-heading">
                <div className="profile-head">Bạn Bè</div>

                <div className="py-2 px-4 rounded-md text-blue-400 cursor-pointer hover:bg-blue-100">
                    Xem tất cả bạn bè
                </div>
            </div>

            <ul className="profile-friend-list">
                <li className="profile-friend-item">
                    <img
                        src={
                            "https://i.pinimg.com/originals/57/6b/47/576b4778aafcd888eb888553637ee006.jpg"
                        }
                        alt=""
                    />

                    <span>Bảo Boss</span>
                </li>
                <li className="profile-friend-item">
                    <img
                        src={
                            "https://genk.mediacdn.vn/2018/3/23/-15217832977121865484568.png"
                        }
                        alt=""
                    />

                    <span>Trần Thanh Tùng</span>
                </li>

                <li className="profile-friend-item">
                    <img
                        src={
                            "https://ahtq.vn/anh-anime-goi-cam/imager_49000.jpg"
                        }
                        alt=""
                    />

                    <span>Trần Thanh Tùng</span>
                </li>
                <li className="profile-friend-item">
                    <img
                        src={
                            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b336d7e-76d0-4fcf-bc45-51a747f81e34/dbiuclq-0217181c-c91c-4401-be90-a0d170cad255.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZiMzM2ZDdlLTc2ZDAtNGZjZi1iYzQ1LTUxYTc0N2Y4MWUzNFwvZGJpdWNscS0wMjE3MTgxYy1jOTFjLTQ0MDEtYmU5MC1hMGQxNzBjYWQyNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yeKWsJtjsJO6MpK95HSH7oKH6sHcbFF1OPUhJm3ggLw"
                        }
                        alt=""
                    />

                    <span>Trần Thanh Tùng</span>
                </li>
                <li className="profile-friend-item">
                    <img src={toptal} alt="" />

                    <span>Trần Thanh Tùng</span>
                </li>
                <li className="profile-friend-item">
                    <img src={toptal} alt="" />

                    <span>Trần Thanh Tùng</span>
                </li>
                <li className="profile-friend-item">
                    <img src={toptal} alt="" />

                    <span>Trần Thanh Tùng</span>
                </li>
                <li className="profile-friend-item">
                    <img src={toptal} alt="" />

                    <span>Trần Thanh Tùng</span>
                </li>
            </ul>
        </div>
    );
};

export default Friends;
