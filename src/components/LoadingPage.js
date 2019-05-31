import React from "react";
import { Icon } from "antd";

const LoadingPage = () => (
  <div className="loader">
    <Icon type="loading" style={{ fontSize: "50px", color: "#08c" }} />
  </div>
);

export default LoadingPage;

// <img className="loader__image" scr="/images/loader.gif" alt="Loading" />
