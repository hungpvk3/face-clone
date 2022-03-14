import React, { useEffect, useRef } from "react";

import "./Image.scss";

const Image = () => {
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
    <div className="c-profile-image-container">
      <div className="c-profile-image-heading">
        <div className="profile-head">Ảnh</div>

        <div className="py-2 px-4 rounded-md text-blue-400 cursor-pointer hover:bg-blue-100">
          Xem tất cả ảnh
        </div>
      </div>

      <ul className="c-profile-image-list">
        <li className="c-profile-image-item" ref={heightRef}>
          <img
            src={
              "https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
            }
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default Image;
