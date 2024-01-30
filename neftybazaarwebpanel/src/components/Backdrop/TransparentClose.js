import Style from "./Backdrop.module.css";

const TransparentClose = ({ value, action }) => {
  return (
    <div
      className={`${Style.transparent_container} ${
        value ? Style.visible : Style.hidden
      }`}
      onClick={action}
    ></div>
  );
};

export default TransparentClose;
