import React, { useState } from "react";

import "./ThumbNail.scss";
import crypto from "../../../../assets/img/crypto.jpg";
import avatar from "../../../../assets/img/stories3.jpg";
import History from "./History";
import { useStore } from "../../../../store";

const Thumb = () => {
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
                        <img src={avatar} alt="" />
                        <div
                            className="thumb-avatar-btn"
                            onClick={handleChoseImage}
                        >
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
                    <h1>Phạm Hùng</h1>
                    {isOpen ? (
                        <History onClose={handleClose} />
                    ) : (
                        <span onClick={() => setIsOpen((prev) => !prev)}>
                            Thêm tiểu sử
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Thumb;
