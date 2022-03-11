import React from "react"
import PropTypes from 'prop-types'

import { Avatar } from "../../icons";

const MesgerItem = ({ avatar, onOpenMesModal }) => {
    return (
        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md" onClick={onOpenMesModal} >
            <Avatar
                avatar={avatar}
                css="h-12 w-12"
                cssActive="bottom-0 right-0.5"
            />
            <div className="">
                <span
                    style={{
                        fontFamily: "Segoe UI",
                        fontWeight: "400",
                        fontSize: "15px",
                    }}
                    className="text-gray-500"
                >
                    Nguyễn Mạnh Công
                </span>
            </div>
        </div>
    );
};

MesgerItem.propTypes = {
    avatar: PropTypes.string,
    onOpenMesModal: PropTypes.func
}

export default MesgerItem;
