import React from "react";

import "./Thumb.scss";
import { Flow } from "../../../../components/icons";

const Thumbnail = () => {
    return (
        <div className="c-thumbnail-container">
            <div className="c-thumbnail-banner">
                <img
                    src="https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/s960x960/153149517_262140152037269_9079070992200092404_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=ggRC4T2kwZQAX9M6loo&_nc_ht=scontent.fhph1-3.fna&oh=00_AT_QMy8kvgMbjDNbTOeou0vIk0C9YP3pN1vclldImVbhGA&oe=6230111B"
                    alt=""
                />
            </div>
            <div className="c-thumbnail-infomation">
                <div className="c-thumbnail-infomation-info">
                    <div className="c-thumbnail-infomation-image">
                        <img
                            src="https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/153398523_262139932037291_2328751523550445868_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=GE_RbNXffpwAX_Q_KQw&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-vSDCMNhepAuAkZAE8yo1j_rYzgYh2bIXynKzenPFjJQ&oe=622D9246"
                            alt=""
                        />
                    </div>
                    <div className="c-thumbnail-infomation-name">
                        <h1 className="c-thumbnail-infomation-title">
                            Xem Là Cuốn
                        </h1>
                        <div className="c-thumbnail-infomation-subtitle">
                            <span>181,5K người theo dõi</span>
                        </div>
                    </div>
                </div>
                <div className="c-thumbnail-infomation-flow">
                    <Flow css="-translate-y-0.5 h-5 w-5" />
                    Theo dõi
                </div>
            </div>
            <div className="c-thumbnail-desc">
                Công ty Truyền Thông & Giải Trí MEMO Game, Lh hợp tác Email:
                MemoGame.vn@gmail.com
            </div>
        </div>
    );
};

export default Thumbnail;
