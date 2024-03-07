import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "আমাদের সম্পর্কে",
      link: "about",
    },
    {
      name: "যোগাযোগ করুন",
      link: "contact-us",
    },
    {
      name: "নিবন্ধন করুন",
      link: "sign-up",
    },
    {
      name: "সাইন ইন",
      link: "sign-in",
    },
    {
      name: "সাবস্ক্রিপশন",
      link: "subscription",
    },
  ];
  return (
    <div className={Style.box}>
      {helpCenter.map((el, i) => (
        <div className={Style.helpCenter} key={i}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
