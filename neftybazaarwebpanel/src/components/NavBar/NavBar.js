"use client";

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

//----IMPORT ICON
import { BsSearch } from "react-icons/bs";
import { FaConnectdevelop } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { RiMenu4Fill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { Button } from "../componentsindex";
import { Notification, Profile, SideBar } from "./index";
import images from "../../img/index";
import Backdrop from "../Backdrop/Backdrop";

//CONTEXT
import NeftyBazaarContext from "../../../Context/NeftyBazaarContext";
import TransparentClose from "../Backdrop/TransparentClose";

const NavBar = () => {
  const router = useRouter();

  //----USESTATE COMPONNTS
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //SMART CONTRACT PART
  const { connectWallet, currentAccount } = useContext(NeftyBazaarContext);

  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const discoverItems = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  const navbarClass = `${Style.navbar} ${showNav ? Style.isfixed : ""}`;

  return (
    <div className={navbarClass}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          {/*LOGO */}
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="NeftyBazaar Logo"
              width={150}
              height={100}
            />
          </div>

          {/* SEARCH */}
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="এনফটি খুজুন" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* //END OF LEFT SECTION */}
        <div className={Style.navbar_container_right}>
          {/* DISCOVER  */}
          <div className={Style.navbar_headLine}>
            <p> আরো দেখুন </p>
            <ul className={Style.sub_menu}>
              {discoverItems.map((el, i) => (
                <li className={Style.menu_item} key={i}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HELP CENTER*/}
          <div className={Style.navbar_headLine}>
            <p> হেল্প সেন্টার </p>
            <ul className={Style.sub_menu}>
              {helpCenter.map((el, i) => (
                <li className={Style.menu_item} key={i}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NOTIFICATION */}
          <div
            onClick={() => openNotification()}
            className={Style.navbar_container_right_notify}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 18.8476C17.6392 18.8476 20.2481 18.1242 20.5 15.2205C20.5 12.3188 18.6812 12.5054 18.6812 8.94511C18.6812 6.16414 16.0452 3 12 3C7.95477 3 5.31885 6.16414 5.31885 8.94511C5.31885 12.5054 3.5 12.3188 3.5 15.2205C3.75295 18.1352 6.36177 18.8476 12 18.8476Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.3888 21.8574C13.0247 23.3721 10.8967 23.3901 9.51947 21.8574"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <circle
                cx="17"
                cy="5"
                r="4"
                fill="#DDF247"
                stroke="#1D1D1D"
                strokeWidth="1.5"
              ></circle>
            </svg>
            {notification && <Notification />}
          </div>

          {/* CREATE & CONNECT BUTTON*/}
          <div className={Style.navbar_container_right_button}>
            {currentAccount == "" ? (
              <Button
                btnName="কানেক্ট ওয়ালেট "
                handleClick={() => connectWallet()}
                icon={<FaConnectdevelop />}
              />
            ) : (
              <Button
                btnName="তৈরি করুন"
                handleClick={() => router.push("/createNFT")}
                icon={<IoIosCreate />}
              />
            )}
          </div>

          {/* USER PROFILE */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />

              {profile && (
                <>
                  <Profile />
                  <TransparentClose value={profile} action={openProfile} />
                </>
              )}
            </div>
          </div>
          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            {!sideBar ? (
              <RiMenu3Line className={Style.menuIcon} onClick={toggleSideBar} />
            ) : (
              <RiMenu4Fill className={Style.menuIcon} onClick={toggleSideBar} />
            )}
          </div>
        </div>
      </div>

      {/* SIDBAR*/}
      <SideBar sidebar={sideBar} closeSidebar={toggleSideBar} />
      <Backdrop backdrop={sideBar} closeSidebar={toggleSideBar} />
    </div>
  );
};

export default NavBar;
