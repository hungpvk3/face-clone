import React from "react";

import "./GroupForMe.scss";

const GroupForMe = () => {
    return (
        <div className="sticky top-6 w-96 h-96 bg-white shadow p-3 rounded-md group">
            <div className="flex justify-between w-full">
                <div>
                    <h1 className="text-base font-medium">Gợi ý cho bạn</h1>
                    <p className="font-light">Nhóm mà bạn có thể quan tâm</p>
                </div>

                <button className="h-8 px-2 rounded hover:bg-blue-100">
                    Xem thêm
                </button>
            </div>

            <div className="mt-3">
                <div className="flex gap-3 overflow-x-auto w-full h-96 snap-x snap-mandatory group-for-me">
                    <div
                        className="slide shrink-0 w-full h-48 snap-always snap-center"
                        id="slide-1"
                    >
                        <img
                            src="https://i1.wp.com/lucloi.vn/wp-content/uploads/2021/08/Presentation1.jpg?fit=1280%2C720&ssl=1"
                            className="w-full h-full rounded-md object-cover"
                            alt=""
                        />
                        <div>
                            <h2 className="text-lg">Programing with home</h2>
                            <span className="font-light">226k people</span>
                        </div>
                        <div className="h-8 mt-2 w-full flex items-center justify-center rounded-md bg-blue-400 text-white">
                            Tham gia nhom
                        </div>
                    </div>
                    <div
                        className="slide shrink-0 w-96 h-48 snap-always snap-center"
                        id="slide-2"
                    >
                        <img
                            src="https://i1.wp.com/lucloi.vn/wp-content/uploads/2021/08/Presentation1.jpg?fit=1280%2C720&ssl=1"
                            className="w-full h-full rounded-md object-cover"
                            alt=""
                        />
                    </div>
                    <div
                        className="slide shrink-0 w-96 h-48 snap-always snap-center"
                        id="slide-3"
                    >
                        <img
                            src="https://i1.wp.com/lucloi.vn/wp-content/uploads/2021/08/Presentation1.jpg?fit=1280%2C720&ssl=1"
                            className="w-full h-full rounded-md object-cover"
                            alt=""
                        />
                    </div>
                    <div
                        className="slide shrink-0 w-96 h-48 snap-always snap-center"
                        id="slide-4"
                    >
                        <img
                            src="https://i1.wp.com/lucloi.vn/wp-content/uploads/2021/08/Presentation1.jpg?fit=1280%2C720&ssl=1"
                            className="w-full h-full rounded-md object-cover"
                            alt=""
                        />
                    </div>
                    <div
                        className="slide shrink-0 w-96 h-48 snap-always snap-center"
                        id="slide-5"
                    >
                        <img
                            src="https://i1.wp.com/lucloi.vn/wp-content/uploads/2021/08/Presentation1.jpg?fit=1280%2C720&ssl=1"
                            className="w-full h-full rounded-md object-cover"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupForMe;
