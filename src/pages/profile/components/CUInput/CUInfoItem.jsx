import React from "react";
import { Checkbox } from "antd";

import "./CUInfoItem.scss";
import CInfo from "./CInfo";

const ProfileItem = ({
    isOpen,
    value,
    placeholder,
    subCheck,
    subData,
    isCheckBox,
    icon,
    dot,
    status,
    statused,
    onChangeValue,
    onChangeOpen,
    onChangeCheck,
    onSave,
}) => {
    return (
        <div className="CU-info">
            {isOpen ? (
                <div className="CU-info-form">
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        name="data"
                        onChange={onChangeValue}
                    />
                    {isCheckBox ? (
                        <Checkbox
                            style={{ marginTop: "8px" }}
                            name="subName"
                            checked={subData}
                            onChange={onChangeCheck}
                        >
                            {subCheck}
                        </Checkbox>
                    ) : null}
                    <hr className="my-4" />
                    <div className="">
                        <button className="mr-3" onClick={onChangeOpen}>
                            Huỷ
                        </button>
                        <button onClick={onSave}>Lưu</button>
                    </div>
                </div>
            ) : (
                <CInfo
                    nameCreate={placeholder.toLowerCase()}
                    onClick={onChangeOpen}
                    icon={icon}
                    dot={dot}
                    data={value}
                    subData={subData ? status : statused}
                />
            )}
        </div>
    );
};

export default ProfileItem;
