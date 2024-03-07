import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = () => {
  //--------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "সংগ্রহ",
      link: "collection",
    },
    {
      name: "অনুসন্ধান করুন",
      link: "search",
    },
    {
      name: "অথর প্রোফাইল",
      link: "author-profile",
    },
    {
      name: "এনএফটি বিবরণ",
      link: "NFT-details",
    },
    {
      name: "একাউন্ট সেটিংস",
      link: "account-setting",
    },
    {
      name: "কানেক্ট ওয়ালেট",
      link: "connect-wallet",
    },
    {
      name: "ব্লগ",
      link: "blog",
    },
  ];
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
