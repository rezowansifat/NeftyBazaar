"use client";

//INTERNAL IMPORT
import { useEffect, useState, useContext } from "react";
import FormStyle from "../../components/Form/Form.module.css";
import Style from "./reSellPage.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/componentsindex";

//CONTEXT
import NeftyBazaarContext from "../../../Context/NeftyBazaarContext";
import Image from "next/image";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { createSale } = useContext(NeftyBazaarContext);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const id = searchParams.get("id");
  const tokenURI = searchParams.get("tokenURI");

  const fetchNFT = async () => {
    try {
      const response = await axios.get(tokenURI);
      const data = response.data;
      setImage(data.image);
    } catch (error) {
      console.error("Error fetching NFT:", error);
    }
  };

  useEffect(() => {
    fetchNFT();
  }, [id]);

  const resell = async () => {
    try {
      await createSale(tokenURI, price, true, id);
      router.push("/author");
    } catch (error) {
      console.error("Error While Resell:", error);
    }
  };

  return (
    <div className={Style.reSellNFT}>
      <div className={Style.reSellNFT_BOX}>
        <h1>Resell You'r NFT, Set Price</h1>
        <div className={FormStyle.Form_box_input}>
          <label htmlFor="name">Price</label>
          <input
            type="number"
            min={0}
            placeholder="Resell Price"
            className={FormStyle.Form_box_input_userName}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className={Style.reSell_Box_Image}>
          {image && (
            <Image src={image} alt="Resell NFT" width={400} height={400} />
          )}
        </div>
        <Button btnName="Resell" handleClick={() => resell()} />
      </div>
    </div>
  );
};

export default page;
