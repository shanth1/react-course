import React from "react";
import Feed from "./Feed";
import FeedMenu from "./FeedMenu";

const Content = () => {
  return (
    <div className="content_wrapper">
      <Feed />
      <FeedMenu />
    </div>
  );
};

export default Content;
