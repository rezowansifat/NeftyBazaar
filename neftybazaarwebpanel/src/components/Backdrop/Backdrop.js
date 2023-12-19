import Style from "./Backdrop.module.css";

const Backdrop = ({ backdrop, closeSidebar }) => {
  return (
    <div
      className={`${Style.container} ${
        backdrop ? Style.visible : Style.hidden
      }`}
      onClick={closeSidebar}
    ></div>
  );
};

export default Backdrop;
