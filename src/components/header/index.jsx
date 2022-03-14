import React, { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { Avatar } from "antd";

import "./header.scss";
import { useStore } from "../../store";
import { MesIcon, Bell, Menu } from "../icons";
import MessengerModal from "../modal/messenger";
import MesModal from "../../pages/messenger/modal";

const Header = () => {
  const {
    authState: { user },
  } = useStore();
  const [isMessenger, setIsMessenger] = useState(false);
  const [mesModal, setMesModal] = useState(false);
  // const [isNotify, setIsNotify] = useState(false);
  const elmRef = useRef();
  let location = useLocation();
  let path = location.pathname.split("/")[1];

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (elmRef.current && !elmRef.current.contains(event.target)) {
        setIsMessenger(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [elmRef]);

  const handleCloseMesModal = () => {
    setMesModal(false);
  };

  const handleOpenMesModal = () => {
    setMesModal(true);
  };

  return (
    <div className="header-container">
      <div className="header-logo">
        <svg
          viewBox="0 0 36 36"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4"
          fill="url(#jsc_c_1m)"
          height="40"
          width="40"
        >
          <defs>
            <linearGradient
              x1="50%"
              x2="50%"
              y1="97.0782153%"
              y2="0%"
              id="jsc_c_1m"
            >
              <stop offset="0%" stopColor="#0062E0"></stop>
              <stop offset="100%" stopColor="#19AFFF"></stop>
            </linearGradient>
          </defs>
          <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
          <path
            className="p361ku9c fill-white"
            d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
          ></path>
        </svg>
      </div>

      <Link
        to="/"
        className={`header-home text-gray-600 hover:text-gray-600 ${
          path === "" ? "text-blue-600" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>

      <div className="header-search">
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

      <ul className="header-noti">
        <li className="header-noti-item">
          <div>
            <Bell />
          </div>
          {/* <Notify isOpen={isNotify} /> */}
        </li>
        <li
          ref={elmRef}
          className="header-noti-item"
          onClick={() => setIsMessenger(true)}
        >
          <div>
            <MesIcon
              css={`
                ${isMessenger ? "fill-blue-600" : ""}
              `}
            />
          </div>
          <MessengerModal
            isOpen={isMessenger}
            elm={elmRef}
            onOpenMesModal={handleOpenMesModal}
          />
        </li>
        <li className="header-noti-item">
          <svg
            viewBox="0 0 44 44"
            width="1em"
            height="1em"
            className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry jnigpg78 odw8uiq3 h-5 w-5"
          >
            <circle cx="7" cy="7" r="6"></circle>
            <circle cx="22" cy="7" r="6"></circle>
            <circle cx="37" cy="7" r="6"></circle>
            <circle cx="7" cy="22" r="6"></circle>
            <circle cx="22" cy="22" r="6"></circle>
            <circle cx="37" cy="22" r="6"></circle>
            <circle cx="7" cy="37" r="6"></circle>
            <circle cx="22" cy="37" r="6"></circle>
            <circle cx="37" cy="37" r="6"></circle>
          </svg>
        </li>
        <Link to="/bookmarks" className="header-noti-item header-noti-hidden">
          <Menu
            css={`h-6 w-6 ${
              path === "bookmarks" ? "text-blue-500" : "text-black"
            }`}
          />
        </Link>
      </ul>

      <div className="header-line"></div>

      <ul className="header-groups">
        <li className="header-groups-item">
          <div className="header-groups-image">
            <img src="https://i.imgur.com/0tHWGTD.jpg" alt="" />
          </div>
        </li>
        <li className="header-groups-item">
          <div className="header-groups-image">
            <img src="https://i.imgur.com/0tHWGTD.jpg" alt="" />
          </div>
        </li>
        <li className="header-groups-item">
          <div className="header-groups-image">
            <img src="https://i.imgur.com/0tHWGTD.jpg" alt="" />
          </div>
        </li>
        <li className="header-groups-item">
          <div className="header-groups-image">
            <img src="https://i.imgur.com/0tHWGTD.jpg" alt="" />
          </div>
        </li>
      </ul>

      <div className="header-info">
        <Avatar src="" size={43}>
          {user?.firstName?.charAt(0)?.toUpperCase()}
        </Avatar>
      </div>
      <MesModal isOpen={mesModal} onCloseMesModal={handleCloseMesModal} />
    </div>
  );
};

export default Header;
