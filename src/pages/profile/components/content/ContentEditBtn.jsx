import React from "react";

import "./ContentEditBtn.scss";

const EditItem = ({ subName, onEdit, onDelete }) => {
    return (
        <div className="popover-container">
            <div className="popover-item" onClick={onEdit}>
                <i
                    style={{
                        backgroundImage:
                            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/rquLPqEEN1c.png)",
                        backgroundPosition: "0px -1082px",
                        backgroundSize: "auto",
                        width: "20px",
                        height: "20px",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                    }}
                ></i>
                <p>Chỉnh sửa {subName}</p>
            </div>

            <div className="popover-item" onClick={onDelete}>
                <i
                    style={{
                        backgroundImage:
                            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/rquLPqEEN1c.png)",
                        backgroundPosition: "0px -1502px",
                        backgroundSize: "auto",
                        width: "20px",
                        height: "20px",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                    }}
                ></i>
                <p>Xoá {subName}</p>
            </div>
        </div>
    );
};

export default EditItem;
