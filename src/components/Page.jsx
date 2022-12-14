import React from "react";
import Content from "./Content";
import SideBar from "./SideBar";

const Page = () => {
  return (
    <div className="page">
      <div className="page-wrapper">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default Page;
