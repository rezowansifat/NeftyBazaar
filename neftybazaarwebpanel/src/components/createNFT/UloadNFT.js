"use client";

import { useState } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Upload.module.css";
import formStyle from "../Form/Form.module.css";
import images from "../../img/index";
import { DropZone } from "./uploadNFTIndex";
import { Button } from "../componentsindex";
import { CiLocationArrow1 } from "react-icons/ci";
import { useRouter } from "next/navigation";

const UloadNFT = ({ uploadToIPFS, createNFT }) => {
  const router = useRouter();

  const [active, setActive] = useState(0);
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState(0);
  const [properties, setProperties] = useState("");

  //WEB3 STATS
  const [price, setprice] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const categoryArry = [
    {
      image: images.nft_image_1,
      category: "স্পোর্টস",
    },
    {
      image: images.nft_image_2,
      category: "আর্টস",
    },
    {
      image: images.nft_image_3,
      category: "মিউজিক",
    },
    {
      image: images.nft_image_1,
      category: "ডিজিটাল",
    },
    {
      image: images.nft_image_2,
      category: "টাইম",
    },
    {
      image: images.nft_image_3,
      category: "ফোটোগ্রাফি",
    },
  ];

  return (
    <div className={Style.upload}>
      <DropZone
        title="JPG, PNG, WEBM, সর্বোচ্চ ১০০ এম্বি"
        heading="ফাইল ড্র্যাগ এবং ড্রপ করুন"
        subHeading="অথবা আপনার ডিভাইসে মিডিয়া ব্রাউজ করুন"
        name={name}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        properties={properties}
        image={images.upload}
        setImage={setImage}
        uploadToIPFS={uploadToIPFS}
      />

      <div className={Style.upload_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">ইটেমের নাম</label>
          <input
            type="text"
            placeholder="পণ্যের নাম"
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="website">ওয়েবসাইট</label>
          <div className={formStyle.Form_box_input_box}>
            <div className={formStyle.Form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>

            <input
              type="text"
              placeholder="ওয়েবসাইট"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <p className={Style.upload_box_input_para}>
            নেফটিবাজার এই আইটেমটির ডিটেইলস পৃষ্ঠায় এই ইউআরএল এর একটি লিঙ্ক
            অন্তর্ভুক্ত করবে, যাতে ব্যবহারকারীরা এটি সম্পর্কে আরও জানতে পারেন।
            আরও ডিটেইলস সহ আপনার নিজস্ব ওয়েবপেজে লিঙ্ক করার জন্য আপনাকে উৎসাহ
            করা হচ্ছে ।
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">বর্ণনা</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="something about yourself in few words"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p className={Style.upload_box_input_para}>
            বিবরণটি আইটেমের ডিটেইলস পেইজে এর ছবির নীচে অন্তর্ভুক্ত করা হবে।
            মার্কডাউন সিনট্যাক্স সাপোর্টেড।
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label className={Style.upload_box_input_title} htmlFor="name">
            কালেকশন বাছাই করুন
          </label>
          <p className={Style.upload_box_input_para}>
            একটি বর্তমান কালেকশন বাছাই করুন বা একটি নতুন তৈরি করুন৷
          </p>

          <div className={Style.upload_box_slider_div}>
            {categoryArry.map((el, i) => (
              <div
                className={`${Style.upload_box_slider} ${
                  active == i + 1 ? Style.active : ""
                }`}
                key={i + 1}
                onClick={() => (setActive(i + 1), setCategory(el.category))}
              >
                <div className={Style.upload_box_slider_box}>
                  <div className={Style.upload_box_slider_box_img}>
                    <Image
                      src={el.image}
                      alt="background image"
                      width={70}
                      height={70}
                      className={Style.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>{el.category} </p>
              </div>
            ))}
          </div>
        </div>

        <div className={formStyle.Form_box_input_social}>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Royalties">রয়্যালটি</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <FaPercent />
              </div>
              <input
                type="text"
                placeholder="20%"
                onChange={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="size">সাইজ</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                placeholder="165MB"
                onChange={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Propertie">বৈশিষ্ঠ </label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Propertie"
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Price">মূল্য </label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="মূল্য"
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={Style.upload_box_btn}>
          <Button
            btnName="আপলোড"
            icon={<CiLocationArrow1 />}
            handleClick={async () =>
              createNFT(
                name,
                price,
                image,
                description,
                router
                // website,
                // royalties,
                // fileSize,
                // category,
                // properties
              )
            }
          />
          <Button
            btnName="প্রিভিউ"
            icon={<CiLocationArrow1 />}
            handleClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default UloadNFT;
