import React from "react";
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
              "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
            }
            alt=""
          />

          <span>Bảo Boss</span>
        </li>
        <li className="profile-friend-item">
          <img
            src={
              "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
            }
            alt=""
          />

          <span>Trần Thanh Tùng</span>
        </li>

        <li className="profile-friend-item">
          <img
            src={
              "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
            }
            alt=""
          />

          <span>Trần Thanh Tùng</span>
        </li>
        <li className="profile-friend-item">
          <img
            src={
              "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
            }
            alt=""
          />

          <span>Trần Thanh Tùng</span>
        </li>
        <li className="profile-friend-item">
          <img
            src={
              "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
            }
            alt=""
          />

          <span>Trần Thanh Tùng</span>
        </li>
        <li className="profile-friend-item">
          <img
            src={
              "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
            }
            alt=""
          />

          <span>Trần Thanh Tùng</span>
        </li>
        <li className="profile-friend-item">
          <img
            src={
              "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
            }
            alt=""
          />

          <span>Trần Thanh Tùng</span>
        </li>
        <li className="profile-friend-item">
          <img
            src={
              "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
            }
            alt=""
          />

          <span>Trần Thanh Tùng</span>
        </li>
      </ul>
    </div>
  );
};

export default Friends;
