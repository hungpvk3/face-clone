import React from "react";

import { Setting, Mark } from "../../../../components/icons";

const WatchNavigate = () => {
    return (
        <div>
            <div>
                <div className="flex justify-between items-center px-4 mt-3">
                    <h2 className="text-2xl font-bold m-0">Watch</h2>
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                        <Setting css="w-6 h-6" />
                    </div>
                </div>

                <div className="my-3">
                    <div className="flex items-center gap-3 p-2 rounded-md mt-2 mx-2 cursor-pointer hover:bg-blue-50 ">
                        <div className="h-9 w-9 rounded-full bg-blue-500 flex items-center justify-center">
                            <svg
                                viewBox="0 0 28 28"
                                className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv fill-white w-6 h-6"
                                height="28"
                                width="28"
                            >
                                <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"></path>
                            </svg>
                        </div>
                        <h2 className="m-0" style={{ fontSize: "16px" }}>
                            Trang chủ
                        </h2>
                    </div>

                    <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-md mt-2 mx-2 cursor-pointer">
                        <div className="h-9 w-9 rounded-full bg-blue-500 flex items-center justify-center">
                            <Mark css="stroke-blue-500 fill-white h-7 w-7" />
                        </div>
                        <h2 className="m-0" style={{ fontSize: "16px" }}>
                            Đã lưu
                        </h2>
                    </div>
                </div>

                <div className="py-2.5 border-t">
                    <div className="flex items-center justify-between ml-4">
                        <h1 className="m-0" style={{ fontSize: "17px" }}>
                            Danh sách xem của bạn
                        </h1>
                        <div className="py-1.5 px-3 mr-2 rounded-md cursor-pointer hover:bg-gray-100">
                            <span
                                className="text-blue-600"
                                style={{ fontSize: "15px" }}
                            >
                                Quản lý
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchNavigate;
