"use client";
import { BsSearch, BsArrowRight } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const SearchBar = ({ onHandleSerch, onClearSearch, query }) => {
  const [search, setSearch] = useState();
  const [searchItem, setSearchItem] = useState(query || "");

  useEffect(() => {
    setSearchItem(query || "");
  }, [query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onHandleSerch(searchItem);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchItem, onHandleSerch]);

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchItem("");
    onClearSearch();
  };
  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input
          type="text"
          placeholder="কীওয়ার্ড টাইপ করুন..."
          onChange={handleInputChange}
          value={searchItem}
        />
        {searchItem != "" ? (
          <RxCross1
            className={Style.SearchBar_box_icon}
            onClick={handleClearSearch}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
