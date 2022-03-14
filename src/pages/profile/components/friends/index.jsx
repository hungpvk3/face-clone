import React, { useEffect, useRef } from "react";
import "./Friends.scss";

const Friends = () => {
  const heightRef = useRef();

  useEffect(() => {
    heightRef.current.style.height = `${heightRef.current.clientWidth}px`;
    const handleRezise = () => {
      heightRef.current.style.height = `${heightRef.current.clientWidth}px`;
    };

    window.addEventListener("resize", handleRezise);

    return () => window.removeEventListener("resize", handleRezise);
  }, []);

  return (
    <div className="profile-friend-container">
      <div className="profile-friend-heading">
        <div className="profile-head">Bạn Bè</div>

        <div className="py-2 px-4 rounded-md text-blue-400 cursor-pointer hover:bg-blue-100">
          Xem tất cả bạn bè
        </div>
      </div>

      <ul className="profile-friend-list">
        <li className="profile-friend-item" ref={heightRef}>
          <img
            src={
              "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
            }
            alt=""
          />

          <span>Bảo Boss</span>
        </li>
      </ul>
    </div>
  );
};

export default Friends;
