//INTERNAL IMPORT
import ItemCard from "@/components/ItemCard/ItemCard";
import Style from "./NFTCards.module.css";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";

const NFTCards = ({ NFTData }) => {
  return (
    <>
      {NFTData.length == 0 ? (
        <Loader />
      ) : (
        <div className={Style.NFTCardTwo}>
          {NFTData.map((data, i) => (
            <Link href={{ pathname: "/details", query: data }} key={i}>
              <ItemCard cardData={data} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NFTCards;
