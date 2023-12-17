import React from "react";

//INTERNAL IMPORT
import Style from "./Button.module.css";

const Button = ({ btnName, handleClick, icon }) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={() => handleClick()}>
        <span> {btnName}</span>
        <i> {icon}</i>
      </button>
    </div>
  );
};

export default Button;
