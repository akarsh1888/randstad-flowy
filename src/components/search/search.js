import React from "react";
import "./search.css";
import Search from "../../assets/search.svg";
const SearchBox = ({ content }) => {
  return (
    <div id="search">
      <img src={Search} />
      <input type="text" placeholder={content} />
    </div>
  );
};

export default SearchBox;
