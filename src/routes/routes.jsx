import React from "react";
import { useRoutes } from "react-router-dom";

import MainEntry from "../pages/main";
import HomePage from "../pages/home/";
import BookMarkPage from "../pages/book-mark";
import WatchPage from "../pages/watch";
import GroupPage from "../pages/group";

import Feel from "../pages/group/feel";
import Group from "../pages/group/main";
import CreateGroupPage from "../pages/group/create";

import ProfilePage from "../pages/profile";
import MainFrofile from "../pages/profile/main";
import FriendProfile from "../pages/profile/friend";
import AboutProfile from "../pages/profile/about";
import ImageProfile from "../pages/profile/images";
import GroupProfile from "../pages/profile/group";
import OverView from "../pages/profile/about/overview";
import WorkandEdu from "../pages/profile/about/work";
import PlacesProfile from "../pages/profile/about/places";
import ContactProfile from "../pages/profile/about/contact";

import MainStories from "../pages/stories";
import ListStories from "../pages/stories/main";
import CreateStories from "../pages/stories/create";

import NotFound from "../pages/notfound";
import { PATH } from "./Contants";
import Page from "../pages/page";
import VideoPage from "../pages/video";

export default function MainRoutes() {
  const elements = useRoutes([
    {
      path: PATH.MAIN,
      element: <MainEntry />,
      children: [
        {
          path: PATH.HOME,
          element: <HomePage />,
        },
        {
          path: PATH.PROFILE,
          element: <ProfilePage />,
          children: [
            {
              path: "",
              element: <MainFrofile />,
            },
            {
              path: "about",
              element: <AboutProfile />,
              children: [
                {
                  path: "",
                  element: <OverView />,
                },
                {
                  path: "work",
                  element: <WorkandEdu />,
                },
                {
                  path: "places",
                  element: <PlacesProfile />
                },
                {
                  path: "contact",
                  element: <ContactProfile/>
                }
              ],
            },
            {
              path: "friends",
              element: <FriendProfile />,
            },
            {
              path: "images",
              element: <ImageProfile />,
            },
            {
              path: "groups",
              element: <GroupProfile />,
            },
          ],
        },
        {
          path: "bookmarks",
          element: <BookMarkPage />,
        },
        {
          path: "watch",
          element: <WatchPage />,
          children: [
            {
              path: "",
              element: <VideoPage />,
            },
            {
              path: ":page",
              element: <Page />,
            },
          ],
        },
        {
          path: "groups",
          element: <GroupPage />,
          children: [
            {
              path: "feel",
              element: <Feel />,
            },
            {
              path: "create",
              element: <CreateGroupPage />,
            },
            {
              path: ":groups",
              element: <Group />,
            },
          ],
        },
      ],
    },
    {
      path: "/stories",
      element: <MainStories />,
      children: [
        {
          path: "",
          element: <ListStories />,
        },
        {
          path: "my",
          element: <CreateStories />,
        },
      ],
    },
    {
      path: "/:page",
      element: <Page />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return elements;
}
