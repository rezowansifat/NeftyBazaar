"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCreate } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { LuArrowRightSquare } from "react-icons/lu";
import { VscChromeClose } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import { FaConnectdevelop } from "react-icons/fa";

//INTERNAL IMPORT
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

//CONTEXT
import NeftyBazaarContext from "../../../../Context/NeftyBazaarContext";

const SideBar = ({ sidebar, closeSidebar }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  //SMART CONTRACT PART
  const { connectWallet, currentAccount } = useContext(NeftyBazaarContext);

  return (
    <div className={`${Style.container} ${sidebar ? Style.toggled : ""}`}>
      <div className={Style.wrapper}>
        {/* //SIDEBAR LOGO */}
        <div className={Style.sidebar_top}>
          <div className={Style.sidebar_logo}>
            <Link href="/home" onClick={closeSidebar}>
              <Image src={images.logo} alt="logo" width={150} height={150} />
            </Link>
            <div className={Style.sidebar_close} onClick={closeSidebar}>
              <VscChromeClose />
            </div>
          </div>
        </div>

        <div className={Style.sidebar_middle}>
          <div className={Style.sidebar_search_box}>
            <input type="text" placeholder="এনফটি খুজুন" />
            <BsSearch onClick={() => {}} className={Style.search_icon} />
          </div>

          {currentAccount == "" ? (
            <Button
              btnName="কানেক্ট ওয়ালেট "
              handleClick={() => connectWallet()}
              icon={<FaConnectdevelop />}
            />
          ) : (
            <Button
              btnName="তৈরি করুন"
              handleClick={(() => router.push("/createNFT"), closeSidebar)}
              icon={<IoIosCreate />}
            />
          )}
        </div>

        <div className={Style.mobile_nav}>
          <div className={Style.nav_menu} onClick={closeSidebar}>
            <Link href="/home">
              {/* <HomeOutlinedIcon /> */}
              <span>Home</span>
            </Link>
          </div>
          <div className={Style.nav_menu}>
            <div className={Style.sidebar_head_line} onClick={toggleDropdown}>
              {/* <MiscellaneousServicesOutlinedIcon /> */}
              <span>Services</span>

              <div
                className={`${Style.sidebar_drop_down} ${
                  dropdown ? Style.open : ""
                }`}
              >
                <LuArrowRightSquare />
              </div>
            </div>

            <div
              className={`${Style.sidebar_drop_down_menu} ${
                dropdown ? Style.sidebar_drop_down_menu_open : ""
              }`}
              // isOpen={dropdown}
            >
              <Link
                onClick={closeSidebar}
                href="/service/mobile-app-development"
              >
                <span>Mobile App</span>
                <MdKeyboardDoubleArrowRight />
              </Link>
              <Link onClick={closeSidebar} href="/service/web-development">
                <span>Web Development</span>
                <MdKeyboardDoubleArrowRight />
              </Link>
              <Link
                onClick={closeSidebar}
                href="/service/blockchain-development"
              >
                <span>Blockchain</span>
                <MdKeyboardDoubleArrowRight />
              </Link>
            </div>
          </div>
          <div className={Style.nav_menu} onClick={closeSidebar}>
            <Link href="/industries">
              {/* <FindInPageOutlinedIcon /> */}
              <span>Industries</span>
            </Link>
          </div>
          <div className={Style.nav_menu} onClick={closeSidebar}>
            <Link href="/works">
              {/* <HomeOutlinedIcon /> */}
              <span>Works</span>
            </Link>
          </div>
          <div className={Style.nav_menu} onClick={closeSidebar}>
            <Link href="/about">
              {/* <ContactSupportOutlinedIcon /> */}
              <span>About</span>
            </Link>
          </div>
          <div className={Style.nav_menu} onClick={closeSidebar}>
            <Link href="/contactus/meeting/timedate">
              {/* <ConnectWithoutContactOutlinedIcon /> */}
              <span>contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
