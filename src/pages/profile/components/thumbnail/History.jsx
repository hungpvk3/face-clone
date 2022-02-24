import React from "react";
import { Input } from "antd";

const { TextArea } = Input;
const History = ({ onClose }) => {
    return (
        <div className="flex flex-col justify-center pt-2">
            <TextArea
                placeholder="Mô tả về bạn"
                bordered
                style={{
                    textAlign: "center",
                    width: "260px",
                    height: "68px",
                    borderRadius: 10,
                    margin: "0 auto",
                }}
            />

            <div className="flex gap-2 justify-center mt-3">
                <button
                    className="py-2 px-4 font-semibold bg-gray-200 rounded hover:bg-gray-300"
                    onClick={onClose}
                >
                    Huỷ
                </button>
                <button className="py-2 px-4 font-semibold bg-gray-100 rounded hover:bg-gray-300">
                    Lưu
                </button>
            </div>
        </div>
    );
};

export default History;
