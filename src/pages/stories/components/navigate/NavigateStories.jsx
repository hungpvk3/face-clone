import React from "react";
import { Input } from "antd";

import { useStore } from "../../../../store";
import BaseNavigte from "./BaseNavigate";
import { Avatar, Setting } from "../../../../components/icons";
import bg2 from "../../../../assets/img/bg-2.jpg";
import bg1 from "../../../../assets/img/bg-1.jpg";

const { TextArea } = Input;
const Stories = ({ onConfirm, onSave, onTextChange, onGetImage }) => {
    const { storiesURL, setStoriesURL } = useStore();

    const handleChangeBgTextStories = (bg) => {
        setStoriesURL((prev) => ({ ...prev, storiesText: bg }));
    };

    return (
        <BaseNavigte>
            <div className="mt-5 border-b" style={{ padding: "0 16px" }}>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold m-0">Tin của bạn</h2>
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                        <Setting css="w-6 h-6" />
                    </div>
                </div>
                <div className="flex items-center gap-2 py-6">
                    <Avatar
                        css="h-16 w-16"
                        avatar="https://i.redd.it/omst81cg4oe41.jpg"
                        cssActive="hidden"
                    />
                    <span className="text-lg font-semibold">Phạm văn hùng</span>
                </div>
            </div>

            {storiesURL.storiesImage ? (
                <div
                    className="flex items-center content-center gap-3 h-20 absolute bottom-0 w-full border-t"
                    style={{
                        padding: "0 16px",
                        fontSize: "16px",
                    }}
                >
                    <button
                        className="py-1.5 px-12 rounded flex-initial bg-gray-200 font-semibold hover:bg-gray-300"
                        onClick={onConfirm}
                    >
                        Bỏ
                    </button>
                    <button
                        className="py-1.5 rounded flex-1 bg-blue-600 text-white hover:bg-blue-700"
                        onClick={onSave}
                    >
                        Chia sẻ lên tin
                    </button>
                </div>
            ) : (
                ""
            )}
            {storiesURL.storiesText ? (
                <>
                    <div className="p-4">
                        <div>
                            <TextArea
                                placeholder="Bắt đầu nhập"
                                style={{
                                    height: 120,
                                    fontSize: "16px",
                                    borderRadius: "6px",
                                }}
                                onChange={onTextChange}
                            />
                        </div>
                        <div className="border border-gray-300 p-2 mt-3 rounded-md">
                            <h2
                                className="text-gray-400"
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "400",
                                }}
                            >
                                Phông nền
                            </h2>
                            <div className="flex items-center gap-3 flex-wrap my-3">
                                <div
                                    onClick={() =>
                                        handleChangeBgTextStories(bg1)
                                    }
                                    className={`h-6 w-6 rounded-full overflow-hidden cursor-pointer ${
                                        storiesURL.storiesText === bg1
                                            ? "h-8 w-8 border-4 border-blue-600"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src={bg1}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    onClick={() =>
                                        handleChangeBgTextStories(bg2)
                                    }
                                    className={`h-6 w-6 rounded-full overflow-hidden cursor-pointer ${
                                        storiesURL.storiesText === bg2
                                            ? "h-8 w-8 border-4 border-blue-600"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src={bg2}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center content-center gap-3 h-20 absolute bottom-0 w-full border-t"
                        style={{
                            padding: "0 16px",
                            fontSize: "16px",
                        }}
                    >
                        <button
                            className="py-1.5 px-12 rounded flex-initial bg-gray-200 font-semibold hover:bg-gray-300"
                            onClick={onConfirm}
                        >
                            Bỏ
                        </button>
                        <button
                            className="py-1.5 rounded flex-1 bg-blue-600 text-white hover:bg-blue-700"
                            onClick={onGetImage}
                        >
                            Chia sẻ lên tin
                        </button>
                    </div>
                </>
            ) : (
                ""
            )}
        </BaseNavigte>
    );
};

export default Stories;
