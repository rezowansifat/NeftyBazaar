//INTERNAL IMPORT
import ItemCard from "@/components/ItemCard/ItemCard";
import Style from "./NFTCards.module.css";

const NFTCards = ({ NFTData }) => {
  return (
    <div className={Style.NFTCardTwo}>
      {NFTData.map((data, i) => (
        <ItemCard cardData={data} key={i} />
      ))}
    </div>
  );
};

export default NFTCards;
