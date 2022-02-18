import React, { useEffect, useState, useRef, createRef } from "react";
import { useScreenshot } from "use-react-screenshot";

import "./StoriesCreate.scss";
import bg1 from "../../../assets/img/bg-1.jpg";
import { useStore } from "../../../store";
import { Aa, Image } from "../../../components/icons";
import NavigateStories from "../components/navigate/NavigateStories";
import AvatarEditor from "../components/edit/AvatarEdit";
import ModalConfirm from "../../../components/modal/Confirm";

const CreateStorie = () => {
    const ref = createRef(null);
    const storiesRef = useRef();
    const [image, takeScreenshot] = useScreenshot();
    const { storiesURL, setStoriesURL } = useStore();
    const [isConfirm, setIsConfirm] = useState(false);
    const [textStories, setTextStories] = useState("");
    const getImage = () => takeScreenshot(ref.current);
    useEffect(() => {
        return () => {
            storiesURL.storiesImage &&
                URL.revokeObjectURL(storiesURL.storiesImage);
        };
    }, [storiesURL.storiesImage]);
    const handleTrashStories = () => {
        storiesURL.storiesImage && URL.revokeObjectURL(storiesURL.storiesImage);
        setStoriesURL({ storiesImage: "", storiesText: "" });
        setIsConfirm(false);
    };
    const handleClose = () => {
        setIsConfirm(false);
    };
    const handleOk = () => {
        setIsConfirm(true);
    };
    const handleTextStoriesChange = (e) => {
        setTextStories(e.target.value);
    };
    return (
        <div className="flex">
            <NavigateStories
                onConfirm={handleOk}
                onTextChange={handleTextStoriesChange}
                onSave={storiesRef.current?.handleSave}
                onGetImage={getImage}
            />
            <div className="w-full flex justify-center my-auto">
                {storiesURL.storiesImage || storiesURL.storiesText ? (
                    <div
                        className="w-4/5 h-max bg-white rounded-md p-3 relative"
                        style={{
                            boxShadow: "0px 0px 6px 5px rgba(0, 0, 0, 0.08)",
                            height: "90vh",
                        }}
                    >
                        <h2 style={{ fontSize: "16px" }} className="mb-3">
                            Xem trước
                        </h2>
                        {storiesURL.storiesImage ? (
                            <AvatarEditor ref={storiesRef} />
                        ) : null}
                        {storiesURL.storiesText ? (
                            <div
                                className="rounded-lg p-3 px-20"
                                style={{
                                    height: "calc(90vh - 58px)",
                                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                                }}
                            >
                                <div
                                    ref={ref}
                                    className="relative rounded-lg overflow-hidden"
                                    style={{
                                        width: "48%",
                                        margin: "0 auto",
                                        height: "100%",
                                    }}
                                >
                                    <img
                                        src={storiesURL.storiesText}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    <span
                                        style={{
                                            maxWidth: "300px",
                                        }}
                                        className="text-white text-lg text-center break-words font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    >
                                        {textStories.trim() !== ""
                                            ? textStories
                                            : "Bắt đâu nhập"}
                                    </span>
                                </div>
                            </div>
                        ) : null}
                    </div>
                ) : (
                    <div className="flex items-center gap-5">
                        <label
                            className="relative cursor-pointer"
                            htmlFor="stories"
                        >
                            <input
                                type="file"
                                className="hidden"
                                id="stories"
                                onChange={(e) =>
                                    setStoriesURL((prev) => ({
                                        ...prev,
                                        storiesImage: URL.createObjectURL(
                                            e.target.files[0]
                                        ),
                                    }))
                                }
                            />
                            <i
                                data-visualcompletion="css-img"
                                style={{
                                    backgroundImage:
                                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/YH2hhKBxjWN.png)",
                                    backgroundPosition: "0px 0px",
                                    backgroundSize: "auto",
                                    width: "220px",
                                    height: "330px",
                                    backgroundRepeat: "no-repeat",
                                    display: "inline-block",
                                }}
                            ></i>
                            <div className="flex flex-col items-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white drop-shadow-lg">
                                    <Image css="w-5 h-5" />
                                </div>
                                <p className="m-0 font-bold text-white truncate">
                                    Tạo tin ảnh
                                </p>
                            </div>
                        </label>
                        <div
                            className="relative cursor-pointer"
                            onClick={() =>
                                setStoriesURL((prev) => ({
                                    ...prev,
                                    storiesText: bg1,
                                }))
                            }
                        >
                            <i
                                data-visualcompletion="css-img"
                                style={{
                                    backgroundImage:
                                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/YH2hhKBxjWN.png)",
                                    backgroundPosition: "0px -331px",
                                    backgroundSize: "auto",
                                    width: "220px",
                                    height: "330px",
                                    backgroundRepeat: "no-repeat",
                                    display: "inline-block",
                                }}
                            ></i>
                            <div className="flex flex-col items-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white drop-shadow-lg">
                                    <Aa />
                                </div>
                                <p className="m-0 font-bold text-white truncate">
                                    Tạo tin dạng văn bản
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <ModalConfirm
                isOpen={isConfirm}
                onClose={handleClose}
                onTrashStories={handleTrashStories}
            />
        </div>
    );
};

export default CreateStorie;
