import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Outlet } from "react-router-dom";

import { useStore } from "../../store";
import ThumbNail from "./components/thumbnail";
import NavigateSticky from "./components/navigate/NavigateSticky";
import ContentEditInfo from "./components/content/ContentEditInfo";
import ContentEditBanner from "./components/content/ContentEdiBanner";
import ContentImage from "./components/content/ContentImage";
import ContentEditIntro from "./components/content/ContentEditIntro";

const ProfilePage = () => {
  const {
    isOpenEditProfile,
    setIsOpenEditProfile,
    isOpenChoseImage,
    setIsOpenChoseImage,
    isOpenUpdateAvatar,
    setIsOpenUpdateAvatar,
    avatar,
    isOpenBanner,
    setIsOpenBanner,
    isOpenEditDetail,
    setIsOpenEditDetail,
    authState: { user },
  } = useStore();
  const [isOpenHistory, setIsOpenHistory] = useState(false);

  const handleCloseEditProfile = () => {
    setIsOpenEditProfile(false);
  };
  const handleCloseEditProfileAvatar = () => {
    setIsOpenChoseImage(false);
  };
  const handleCloseHistory = () => {
    setIsOpenHistory(false);
  };
  const handleCloseUpdateAvatar = () => {
    setIsOpenUpdateAvatar(false);
  };
  const handleCloseBanner = () => {
    setIsOpenBanner(false);
  };
  const handleCloseEditDetail = () => {
    setIsOpenEditDetail(false);
  };
  const handleOpenHistory = () => {
    setIsOpenHistory(true);
  };

  return (
    <div>
      <div>
        <ThumbNail user={user} />
      </div>
      <NavigateSticky />

      <Modal
        zIndex={1}
        title={
          <p className="text-xl text-center font-bold m-0">
            Chỉnh sửa Trang cá nhân
          </p>
        }
        visible={isOpenEditProfile}
        onCancel={handleCloseEditProfile}
        width={680}
        style={{ borderRadius: "10px", zIndex: 10 }}
      >
        <ContentEditInfo
          isOpenHistory={isOpenHistory}
          onOpenHistory={handleOpenHistory}
          onCloseHistory={handleCloseHistory}
        />
      </Modal>
      <Modal
        zIndex={3}
        style={{ left: "-3px", top: "26%" }}
        title={
          <p className="text-xl font-bold m-0 text-center">Cập nhật ảnh bìa</p>
        }
        visible={isOpenBanner}
        onCancel={handleCloseBanner}
        width={500}
      >
        <ContentEditBanner />
      </Modal>
      <Modal
        style={{ left: "-3px" }}
        title={<p className="text-xl font-bold m-0 text-center">Chọn ảnh</p>}
        visible={isOpenChoseImage}
        onCancel={handleCloseEditProfileAvatar}
        footer={null}
        width={680}
      >
        <ContentImage />
      </Modal>
      <Modal
        style={{ left: "-3px" }}
        title={
          <p className="text-xl font-bold m-0 text-center">
            Cập nhật ảnh đại diện
          </p>
        }
        visible={isOpenUpdateAvatar}
        onCancel={handleCloseUpdateAvatar}
        footer={[
          <Button key="destroy" onClick={handleCloseUpdateAvatar}>
            Huỷ
          </Button>,
          <Button key="link" type="primary">
            Lưu
          </Button>,
        ]}
        width={680}
      >
        <div className="w-72 h-72 mx-auto my-10 rounded-full overflow-hidden">
          <img
            src={avatar && avatar}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </Modal>
      <Modal
        zIndex={2}
        visible={isOpenEditDetail}
        onCancel={handleCloseEditDetail}
        title={
          <p className="text-xl font-bold m-0 text-center">
            Chỉnh sửa chi tiết
          </p>
        }
        width={700}
        style={{ top: "68px" }}
        bodyStyle={{
          height: "530px",
          overflowY: "scroll",
        }}
      >
        <ContentEditIntro />
      </Modal>

      <Outlet context={user} />
    </div>
  );
};

export default ProfilePage;
