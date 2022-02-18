import React from "react";

import "./Contact.scss";
import crypto from "../../../assets/img/crypto.jpg";
import toptal from "../../../assets/img/toptal.jpg";
import ItemContact from "./ContactItem";

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Được tài trợ</h2>
            <ul className="contact-ads">
                <li className="contact-ads-item">
                    <img src={crypto} alt="" />
                    <div>
                        <h4>NFT Marketplace</h4>
                        <p>crypto.com</p>
                    </div>
                </li>
                <li className="contact-ads-item">
                    <img src={toptal} alt="" />
                    <div>
                        <h4>Top clients come you</h4>
                        <p>toptal.com</p>
                    </div>
                </li>
            </ul>

            <div className="contact-line" />

            <div>
                <h2 className="contact-title">Người liên hệ</h2>

                <ul className="contact-list">
                    <ItemContact
                        avatar={
                            "https://cdn.donmai.us/original/5a/76/__hk416_girls_frontline_drawn_by_hiromaster_sinta_jh__5a76b8687822e05471412babcea21512.png"
                        }
                        displayName="Phạm văn hùng"
                    />
                    <ItemContact
                        avatar={
                            "https://cdn.donmai.us/original/5a/76/__hk416_girls_frontline_drawn_by_hiromaster_sinta_jh__5a76b8687822e05471412babcea21512.png"
                        }
                        displayName="Phạm văn hùng"
                    />
                    <ItemContact
                        avatar={
                            "https://cdn.donmai.us/original/5a/76/__hk416_girls_frontline_drawn_by_hiromaster_sinta_jh__5a76b8687822e05471412babcea21512.png"
                        }
                        displayName="Phạm văn hùng"
                    />
                </ul>
            </div>
        </div>
    );
};

export default Contact;
