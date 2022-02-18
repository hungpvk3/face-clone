import React from "react";
import { Modal } from "antd";

const Confirm = ({ isOpen, onClose, onTrashStories }) => {
    return (
        <Modal
            visible={isOpen}
            title={<h2 className="m-0 font-bold text-xl p-0">Bỏ tin?</h2>}
            width={500}
            style={{ top: "36%" }}
            footer={[
                <button
                    key="1"
                    className="py-1 px-4 mr-2 rounded text-blue-500 font-semibold hover:bg-gray-200"
                    style={{ fontSize: "16px" }}
                    onClick={onClose}
                >
                    Tiếp tục chỉnh sửa
                </button>,
                <button
                    key="2"
                    className="py-1 px-12 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600"
                    style={{ fontSize: "16px" }}
                    onClick={onTrashStories}
                >
                    Bỏ
                </button>,
            ]}
        >
            <h2 className="m-0">Bạn có chắc chắn muốn bỏ tin này</h2>
        </Modal>
    );
};

export default Confirm;
