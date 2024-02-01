//INTERNAL IMPORT
import Style from "./loader.module.css";

const Loader = () => {
  return (
    <div className={Style.loader_box}>
      <div className={Style.loader_cont}>
        <div className={Style.loader}></div>
      </div>
    </div>
  );
};

export default Loader;
