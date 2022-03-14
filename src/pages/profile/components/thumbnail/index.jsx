import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ThumbNail.scss";
import crypto from "../../../../assets/img/crypto.jpg";
import History from "./History";
import { useStore } from "../../../../store";

const Thumb = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsOpenBanner, setIsOpenChoseImage } = useStore();

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpenBanner = () => {
    setIsOpenBanner(true);
  };
  const handleChoseImage = () => {
    setIsOpenChoseImage(true);
  };

  return (
    <div className="thumb-container">
      <div className="thumb-wrapper">
        <div className="thumb-banner">
          <img src={crypto} alt="" />

          <div className="thumb-avatar">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToplStyx8pu0DsUkR-zSI6hAAN-vzcrZF0HA&usqp=CAU"
              }
              alt=""
              className="object-contain"
            />
            <div className="thumb-avatar-btn" onClick={handleChoseImage}>
              <i
                data-visualcompletion="css-img"
                className="hu5pjgll m6k467ps"
                style={{
                  backgroundImage: `url(
                                "https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/Wy9eNEFIQtg.png"
                            `,
                  backgroundPosition: "0px -1226px",
                  backgroundSize: "25px 1435px",
                  width: "16px",
                  height: "16px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              ></i>
            </div>
          </div>
          <button className="thumb-button" onClick={handleOpenBanner}>
            <i
              data-visualcompletion="css-img"
              className="hu5pjgll m6k467ps"
              style={{
                backgroundImage: `url(
                                "https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/Wy9eNEFIQtg.png"
                            `,
                backgroundPosition: "0px -1226px",
                backgroundSize: "25px 1435px",
                width: "16px",
                height: "16px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <span>Thêm ảnh bìa</span>
          </button>
        </div>
      </div>
      <div className="thumb-info">
        <div className="thumb-info-wrapper">
          <h1>{`${user?.firstName} ${user?.lastName}`}</h1>
          {isOpen ? (
            <History onClose={handleClose} />
          ) : (
            <span onClick={() => setIsOpen((prev) => !prev)}>Thêm tiểu sử</span>
          )}
        </div>
      </div>
    </div>
  );
};

Thumb.ropTypes = {
  user: PropTypes.object,
};

export default Thumb;
