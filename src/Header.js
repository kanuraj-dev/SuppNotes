import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [{ notes, search }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "SEARCH",
      search: searchInput,
    });
  }, [searchInput]);

  const onSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://image.winudf.com/v2/image1/Y29tLmR2ZGIuYmVyZ25vdGVzX2ljb25fMTU0NTA1Mzc5Ml8wNjA/icon.png?fakeurl=1&h=120"
        alt=""
        onClick={() => {
          window.location.reload();
        }}
      />
      <h1
        className="header__title"
        onClick={() => {
          window.location.reload();
        }}
      >
        SUPP-Notes
      </h1>

      <div className="header__search">
        <Search className="header__searchIcon" />
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search"
          onChange={onSearchInputChange}
          value={searchInput}
        />
      </div>
    </div>
  );
}

export default Header;
