import React, { useState } from "react";

import ProfileItem from "../../components/CUInput/CUInfoItem";
import { Learn, Bag } from "../../../../components/icons";

const data = {
    work: {
        name: "THPT Thanh Binh",
        subName: true,
    },
    education: {
        name: "",
        subName: false,
    },
};

const WorkandEdu = () => {
    const [work, setWork] = useState({
        isOpen: false,
        data: data.work.name,
        subData: data.work.subName,
    });
    const [education, setEducation] = useState({
        isOpen: false,
        data: data.education.name,
        subData: data.education.subName,
    });

    const handleChangeWork = () => {
        setWork({ ...work, isOpen: !work.isOpen, data: data.work.name });
    };
    const handleChangeValue = (e) => {
        setWork({ ...work, data: e.target.value });
    };
    const handleChangeCheck = (e) => {
        setWork({ ...work, subData: e.target.checked });
    };
    const handleSaveWork = () => {
        data.work.name = work.data;
        data.work.subName = work.subData;
        setWork({ ...work, isOpen: false });
    };

    const handleChangeEdu = () => {
        setEducation({
            ...education,
            isOpen: !education.isOpen,
            data: data.education.name,
        });
    };
    const handleChangeEducation = (e) => {
        setEducation({ ...education, data: e.target.value });
    };
    const handleChangeCheckEdu = (e) => {
        setEducation({ ...education, subData: e.target.checked });
    };
    const handleSaveEdu = () => {
        data.education.name = education.data;
        data.education.subName = education.subData;
        setEducation({ ...education, isOpen: false });
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="">
                <ProfileItem
                    isOpen={work.isOpen}
                    value={work.data}
                    placeholder="Công ty"
                    subCheck="Tôi đang làm việc tại đây"
                    status="Đang làm việc tại"
                    statused="Đã làm việc tại"
                    isCheckBox
                    dot
                    subData={work.subData}
                    icon={<Bag css="h-7 w-7 text-gray-500" />}
                    onChangeValue={handleChangeValue}
                    onChangeOpen={handleChangeWork}
                    onChangeCheck={handleChangeCheck}
                    onSave={handleSaveWork}
                />
            </div>
            <div className="">
                <ProfileItem
                    isOpen={education.isOpen}
                    value={education.data}
                    placeholder="Trường học"
                    subCheck="Tôi đang học tại đây"
                    status="Đang học tại"
                    statused="Đã tốt nghiệp tại"
                    isCheckBox
                    dot
                    subData={education.subData}
                    icon={<Learn css="h-7 w-7 text-gray-500" />}
                    onChangeValue={handleChangeEducation}
                    onChangeOpen={handleChangeEdu}
                    onChangeCheck={handleChangeCheckEdu}
                    onSave={handleSaveEdu}
                />
            </div>
        </div>
    );
};

export default WorkandEdu;
