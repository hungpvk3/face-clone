import React from "react";

import { Avatar } from "../../../components/icons";
import "./Contact.scss";

const ContactItem = ({ avatar, displayName }) => {
    return (
        <li className="contact-list-item">
            <Avatar
                avatar={avatar}
                css="h-12 w-12"
                cssActive="bottom-0 right-0.5"
            />
            <span>{displayName}</span>
        </li>
    );
};

export default ContactItem;
