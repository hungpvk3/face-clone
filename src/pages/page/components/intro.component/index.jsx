import React from "react";

import "./Intro.component.scss";
import { Dot } from "../../../../components/icons";

const Intro = () => {
    return (
        <div className="c-intro-wrapper bg-white rounded-md p-3 shadow">
            <div className="flex items-center justify-between mb-4">
                <h1 className="c-intro-title">Giới thiệu</h1>
                <div className="h-7 w-9 rounded flex items-center justify-center bg-gray-100">
                    <Dot css="h-5 w-5" />
                </div>
            </div>
            <div className="c-intro-item">
                <img
                    className="hu5pjgll cwsop09l"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/9pstd2OUx0R.png"
                    alt=""
                    height="20"
                    width="20"
                />
                <p>312k người theo dõi</p>
            </div>
            <div className="c-intro-item">
                <img
                    className="hu5pjgll cwsop09l"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/XSg0ZfPoxQX.png"
                    alt=""
                    height="20"
                    width="20"
                />
                <p>Việc làm: Liên hệ hungpv@gmail.com</p>
            </div>
            <div className="c-intro-item">
                <img
                    className="hu5pjgll cwsop09l"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/4mSNCiGuFsr.png"
                    alt=""
                    height="20"
                    width="20"
                />
                <p>Contact: hungpv@gmail.com</p>
            </div>
            <div className="c-intro-item">
                <img
                    className="hu5pjgll cwsop09l"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/zvm_GlT6_y2.png"
                    alt=""
                    height="20"
                    width="20"
                />
                <a href="https://youtube.com">youtube.com</a>
            </div>
        </div>
    );
};

export default Intro;
