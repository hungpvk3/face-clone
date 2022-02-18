import React from "react";
import { Switch } from "antd";

import CUInfoItem from "../CUInput/CUInfoItem";

const ContentIntro = () => {
    return (
        <div>
            <div className="">
                <h2 className="text-lg m-0">Chỉnh sửa phần giới thiệu</h2>
                <span className="" style={{ fontSize: "15px" }}>
                    Chi tiết bạn chọn sẽ hiển thị công khai.
                </span>
            </div>

            <h2 className="text-lg mt-6">Công việc</h2>
            <div className="flex items-center gap-3">
                {/* <Switch /> */}
                <CUInfoItem
                    isOpen={false}
                    value={""}
                    placeholder="Nơi làm việc"
                    subCheck="Tôi đang làm việc tại đây"
                    status="Đang làm việc tại"
                    statused="Đã làm việc tại"
                    isCheckBox={false}
                    subData={""}
                    icon={""}
                    // onChangeValue={handleChangeValue}
                    // onChangeOpen={handleChangeWork}
                    // onChangeCheck={handleChangeCheck}
                    // onSave={handleSaveWork}
                />
            </div>

            <h2 className="text-lg mt-6">Học vấn</h2>
            <div className="flex items-center gap-3">
                <Switch />
                <CUInfoItem
                    isOpen={false}
                    value={"THPT Thanh Bình"}
                    placeholder="Nơi làm việc"
                    // subCheck="Tôi đang làm việc tại đây"
                    status="Đang làm việc tại"
                    statused="Đã làm việc tại"
                    // isCheckBox={false}
                    subData={""}
                    dot={false}
                    // icon={""}
                    // onChangeValue={handleChangeValue}
                    // onChangeOpen={handleChangeWork}
                    // onChangeCheck={handleChangeCheck}
                    // onSave={handleSaveWork}
                />
            </div>

            <h2 className="text-lg mt-6">Tỉnh thành phố hiện tại</h2>
            <div className="flex items-center gap-3">
                {/* <Switch /> */}
                <CUInfoItem
                    isOpen={false}
                    value={""}
                    placeholder="Nơi làm việc"
                    subCheck="Tôi đang làm việc tại đây"
                    status="Đang làm việc tại"
                    statused="Đã làm việc tại"
                    isCheckBox={false}
                    subData={""}
                    icon={""}
                    dot={false}
                    // onChangeValue={handleChangeValue}
                    // onChangeOpen={handleChangeWork}
                    // onChangeCheck={handleChangeCheck}
                    // onSave={handleSaveWork}
                />
            </div>

            <h2 className="text-lg mt-6">Tỉnh thành phố hiện tại</h2>
            <div className="flex items-center gap-3">
                <Switch />
                <CUInfoItem
                    isOpen={false}
                    value={"TP Hải Dương"}
                    placeholder="Nơi làm việc"
                    subCheck="Tôi đang làm việc tại đây"
                    statused="Sống tại"
                    isCheckBox={false}
                    subData={false}
                    icon={""}
                    dot={false}
                    // onChangeValue={handleChangeValue}
                    // onChangeOpen={handleChangeWork}
                    // onChangeCheck={handleChangeCheck}
                    // onSave={handleSaveWork}
                />
            </div>

            <h2 className="text-lg mt-6">Nơi sống</h2>
            <div className="flex items-center gap-3">
                <Switch />
                <CUInfoItem
                    isOpen={false}
                    value={"TP Hải Dương"}
                    placeholder="Nơi làm việc"
                    subCheck="Tôi đang làm việc tại đây"
                    statused="Đến từ"
                    isCheckBox={false}
                    subData={false}
                    icon={""}
                    dot={false}
                    // onChangeValue={handleChangeValue}
                    // onChangeOpen={handleChangeWork}
                    // onChangeCheck={handleChangeCheck}
                    // onSave={handleSaveWork}
                />
            </div>

            <h2 className="text-lg mt-6">Tham gia Facebook</h2>
            <div className="flex items-center gap-3">
                <Switch />
                <span>Tham gia vào Tháng 7 năm 2016</span>
            </div>
        </div>
    );
};

export default ContentIntro;
// import React from "react";
// import { Switch } from "antd";

// import { CUInfoItem } from "../create";

// const ContentIntro = () => {
//     return (
//         <div>
//             <div className="">
//                 <h2 className="text-lg m-0">Chỉnh sửa phần giới thiệu</h2>
//                 <span className="" style={{ fontSize: "15px" }}>
//                     Chi tiết bạn chọn sẽ hiển thị công khai.
//                 </span>
//             </div>

//             <h2 className="text-lg mt-6">Công việc</h2>
//             <div className="flex items-center gap-3">
//                 {/* <Switch /> */}
//                 <ProfileItem
//                     isOpen={false}
//                     value={""}
//                     placeholder="Nơi làm việc"
//                     subCheck="Tôi đang làm việc tại đây"
//                     status="Đang làm việc tại"
//                     statused="Đã làm việc tại"
//                     isCheckBox={false}
//                     subData={""}
//                     icon={""}
//                     // onChangeValue={handleChangeValue}
//                     // onChangeOpen={handleChangeWork}
//                     // onChangeCheck={handleChangeCheck}
//                     // onSave={handleSaveWork}
//                 />
//             </div>

//             <h2 className="text-lg mt-6">Học vấn</h2>
//             <div className="flex items-center gap-3">
//                 <Switch />
//                 <ProfileItem
//                     isOpen={false}
//                     value={"THPT Thanh Bình"}
//                     placeholder="Nơi làm việc"
//                     // subCheck="Tôi đang làm việc tại đây"
//                     status="Đang làm việc tại"
//                     statused="Đã làm việc tại"
//                     // isCheckBox={false}
//                     subData={""}
//                     dot={false}
//                     // icon={""}
//                     // onChangeValue={handleChangeValue}
//                     // onChangeOpen={handleChangeWork}
//                     // onChangeCheck={handleChangeCheck}
//                     // onSave={handleSaveWork}
//                 />
//             </div>

//             <h2 className="text-lg mt-6">Tỉnh thành phố hiện tại</h2>
//             <div className="flex items-center gap-3">
//                 {/* <Switch /> */}
//                 <ProfileItem
//                     isOpen={false}
//                     value={""}
//                     placeholder="Nơi làm việc"
//                     subCheck="Tôi đang làm việc tại đây"
//                     status="Đang làm việc tại"
//                     statused="Đã làm việc tại"
//                     isCheckBox={false}
//                     subData={""}
//                     icon={""}
//                     dot={false}
//                     // onChangeValue={handleChangeValue}
//                     // onChangeOpen={handleChangeWork}
//                     // onChangeCheck={handleChangeCheck}
//                     // onSave={handleSaveWork}
//                 />
//             </div>

//             <h2 className="text-lg mt-6">Tỉnh thành phố hiện tại</h2>
//             <div className="flex items-center gap-3">
//                 <Switch />
//                 <ProfileItem
//                     isOpen={false}
//                     value={"TP Hải Dương"}
//                     placeholder="Nơi làm việc"
//                     subCheck="Tôi đang làm việc tại đây"
//                     statused="Sống tại"
//                     isCheckBox={false}
//                     subData={false}
//                     icon={""}
//                     dot={false}
//                     // onChangeValue={handleChangeValue}
//                     // onChangeOpen={handleChangeWork}
//                     // onChangeCheck={handleChangeCheck}
//                     // onSave={handleSaveWork}
//                 />
//             </div>

//             <h2 className="text-lg mt-6">Nơi sống</h2>
//             <div className="flex items-center gap-3">
//                 <Switch />
//                 <ProfileItem
//                     isOpen={false}
//                     value={"TP Hải Dương"}
//                     placeholder="Nơi làm việc"
//                     subCheck="Tôi đang làm việc tại đây"
//                     statused="Đến từ"
//                     isCheckBox={false}
//                     subData={false}
//                     icon={""}
//                     dot={false}
//                     // onChangeValue={handleChangeValue}
//                     // onChangeOpen={handleChangeWork}
//                     // onChangeCheck={handleChangeCheck}
//                     // onSave={handleSaveWork}
//                 />
//             </div>

//             <h2 className="text-lg mt-6">Tham gia Facebook</h2>
//             <div className="flex items-center gap-3">
//                 <Switch />
//                 <span>Tham gia vào Tháng 7 năm 2016</span>
//             </div>
//         </div>
//     );
// };

// export default ContentIntro;
