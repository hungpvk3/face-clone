import React, {
    useEffect,
    useState,
    useRef,
    forwardRef,
    useImperativeHandle,
} from "react";
import AvatarEditor from "react-avatar-editor";
import { useStore } from "../../../../store";
import { Slider } from "antd";

const AvatarEdit = (props, ref) => {
    const { storiesURL, setStoriesURL } = useStore();
    const [width, setWidth] = useState(window.innerWidth);
    const [statusImage, setStatusImage] = useState({
        zoom: 0.5,
        rotate: 0,
    });
    const storiesRef = useRef();
    const widthParse =
        width > 1600
            ? parseInt((width - 2260) * -1)
            : parseInt((width - 1900) * -1);

    useEffect(() => {
        const handleRezise = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleRezise);

        return window.removeEventListener("resize", handleRezise);
    }, []);
    useImperativeHandle(ref, () => ({
        handleSave: () => {
            const canvasScaled = storiesRef.current.getImageScaledToCanvas();
            setStoriesURL((prev) => ({
                ...prev,
                storiesImage: canvasScaled.toDataURL(),
            }));
        },
    }));

    const handleZoomSlider = (value) => {
        setStatusImage((prev) => ({ ...prev, zoom: value }));
    };
    const handleRotate = () => {
        setStatusImage((prev) => ({ ...prev, rotate: prev.rotate + 90 }));
    };

    return (
        <>
            <AvatarEditor
                ref={storiesRef}
                image={storiesURL.storiesImage}
                width={widthParse}
                height={600}
                border={[300, 20]}
                color={[0, 0, 0, 0.9]} // RGBA
                scale={statusImage.zoom}
                rotate={statusImage.rotate}
                style={{
                    height: "604px",
                    width: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                className="flex items-center w-full justify-center p-2"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
            >
                <Slider
                    min={0.2}
                    max={2}
                    step={0.1}
                    value={statusImage.zoom}
                    onChange={handleZoomSlider}
                    style={{ width: 260 }}
                />
                <button
                    className="py-1.5 px-5 bg-gray-200 rounded"
                    onClick={handleRotate}
                >
                    Xoay
                </button>
            </div>
        </>
    );
};

export default forwardRef(AvatarEdit);
