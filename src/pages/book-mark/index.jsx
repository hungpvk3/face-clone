import React from "react";

import "./BookMark.scss";
import Navigate from "../home/components/Navigate";
import { useStore } from "../../store";

const BookMark = () => {
  const {
    authState: { user },
  } = useStore();
  console.log(user);
  return (
    <div className="bookmarks-wrapper">
      <Navigate user={user} />
    </div>
  );
};

export default BookMark;
