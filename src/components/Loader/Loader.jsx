import React from "react";
import "./Loader.scss";
import { Spinner } from "../../utils/images";

const Loader = () => {
  return (
    <div className="container py-5">
      <div className="flex flex-center loader">
        <img src={Spinner} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
