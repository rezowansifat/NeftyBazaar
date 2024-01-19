//INTERNAL IMPORT
import ItemCard from "@/components/ItemCard/ItemCard";
import Style from "./NFTCards.module.css";
import Link from "next/link";

const NFTCards = ({ NFTData }) => {
  return (
    <div className={Style.NFTCardTwo}>
      {NFTData.map((data, i) => (
        <Link href={{ pathname: "/details", query: data }} key={i}>
          <ItemCard cardData={data} />
        </Link>
      ))}
    </div>
  );
};

export default NFTCards;
