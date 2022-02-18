import React from "react";
import { Popover } from "antd";

import "./CInfo.scss";
import { Dot } from "../../../../components/icons";
import EditItem from "../content/ContentEditBtn";

const Infomation = ({ nameCreate, data, icon, dot, subData, onClick }) => {
    return (
        <>
            {data !== "" ? (
                <div className="CU-show">
                    <div className="CU-show-container">
                        <div>{icon}</div>

                        <p>
                            {subData} <span>{data}</span>
                        </p>
                    </div>

                    {dot ? (
                        <div className="CU-show-dot">
                            <Popover
                                placement="bottomRight"
                                content={
                                    <EditItem
                                        subName={nameCreate}
                                        onEdit={onClick}
                                        onDelete={onClick}
                                    />
                                }
                                trigger="click"
                            >
                                <button>
                                    <Dot css="h-5 w-5" />
                                </button>
                            </Popover>
                        </div>
                    ) : null}
                </div>
            ) : (
                <div className="CU-show-create" onClick={onClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <p>Thêm {nameCreate}</p>
                </div>
            )}
        </>
    );
};

export default Infomation;
