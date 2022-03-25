import React, { useState } from "react";
import { Modal } from "antd";

import { X } from "../icons";

const SearchFriend = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };
  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  return (
    <div>
      <div className="header-search" onClick={handleOpenSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <Modal
        visible={openSearch}
        onCancel={handleCloseSearch}
        closable={false}
        footer={null}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 flex-1 flex items-center border rounded-full bg-gray-100 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search on Facebook"
              className="px-2 w-full outline-none bg-gray-100"
            />
          </div>
          <div className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
            <X css="w-6 h-6" />
          </div>
        </div>
        <div className="mt-3">
            <div className="p-3 rounded-lg hover:bg-gray-200">
                hung
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchFriend;
