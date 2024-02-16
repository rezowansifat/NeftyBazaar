import React from "react";

//INTERNAL IMPORT
import Style from "./BlackButton.module.css";

const BlackButton = ({ btnName, handleClick, icon }) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={() => handleClick()}>
        <span> {btnName}</span>
        <i> {icon}</i>
      </button>
    </div>
  );
};

export default BlackButton;
