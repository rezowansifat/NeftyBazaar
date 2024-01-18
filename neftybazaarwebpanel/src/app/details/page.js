//INTERNAL IMPORT
import {
  NFTDescription,
  NFTDetailsImg,
} from "@/components/NFTDetails/NFTDetailsIndex";
import Style from "./NFTDetailsPage.module.css";
import NFTDetailsPage from "@/components/NFTDetails/NFTDetailsPage";
import { Brand } from "@/components/componentsindex";
import Category from "@/components/Category/Category";

const page = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};
export default page;
