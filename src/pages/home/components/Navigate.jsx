import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navigate.scss";
import friends from "../../../assets/img/friends.png";
import group from "../../../assets/img/group.png";
import messenger from "../../../assets/img/messenger.png";
import market from "../../../assets/img/market.png";
import watch from "../../../assets/img/watch.png";

const Navition = () => {
    const [isSeeMore, setSemore] = useState(false);

    const handleChangeSee = () => {
        setSemore(!isSeeMore);
    };

    return (
        <div className="navigate-home-container">
            <ul className="navigate-home-list">
                <Link to="/profile" className="navigate-home-item">
                    <img
                        src="https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
                        alt=""
                        className="navigate-home-avatar object-cover"
                    />
                    <span>Phạm Hùng</span>
                </Link>
                <li className="navigate-home-item">
                    <img src={friends} alt="" />
                    <span>Bạn bè</span>
                </li>
                <Link to="/groups/feel" className="navigate-home-item">
                    <img src={group} alt="" />
                    <span>Nhóm</span>
                </Link>
                <li className="navigate-home-item">
                    <img src={messenger} alt="" />
                    <span>Messenger</span>
                </li>
                {isSeeMore ? (
                    <>
                        <li className="navigate-home-item">
                            <img src={market} alt="" />
                            <span>Marketplace</span>
                        </li>
                        <Link to="../watch" className="navigate-home-item">
                            <img src={watch} alt="" />
                            <span>Watch</span>
                        </Link>
                    </>
                ) : (
                    ""
                )}
                <li className="navigate-home-item" onClick={handleChangeSee}>
                    <div>
                        {!isSeeMore ? (
                            <svg
                                viewBox="0 0 16 16"
                                width="1em"
                                height="1em"
                                className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry jnigpg78 odw8uiq3"
                            >
                                <g
                                    fillRule="evenodd"
                                    transform="translate(-448 -544)"
                                >
                                    <path
                                        fillRule="nonzero"
                                        d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                                    ></path>
                                </g>
                            </svg>
                        ) : (
                            <svg
                                viewBox="0 0 20 20"
                                width="1em"
                                height="1em"
                                className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry jnigpg78 odw8uiq3"
                            >
                                <path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path>
                            </svg>
                        )}
                    </div>
                    <span>{isSeeMore ? "Ẩn bớt" : "See more"}</span>
                </li>
            </ul>

            <div className="navigate-home-line" />

            <div className="navigate-home-shortcuts">
                <h3 className="navigate-home-shortcuts-title">
                    Lối tắt của bạn
                </h3>

                <ul className="navigate-home-shortcuts-list">
                    <li className="navigate-home-item">
                        <img src={group} alt="" />
                        <span>Học lập trình web (F8 FullStack.edu.vn)</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navition;
