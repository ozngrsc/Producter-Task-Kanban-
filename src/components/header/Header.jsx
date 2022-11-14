import React, { useState } from "react";
import "./Header.css";
import Logo from "../../utils/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import AddIcon from "@mui/icons-material/Add";
import Modal from "./Modal";

function Header() {
  const [modal, setModal] = useState(false);

  return (
    <div className="header">
      <div className="header_left_logo">
        <img className="header_logo" src={Logo} alt="Producter Logo" />
      </div>
      <div className="header_bar">
        <div className="header_bar_left">
          <div className="header_search">
            <SearchIcon className="header_searchIcon" />
            <input
              className="header_searchInput"
              placeholder="Search"
              type="text"
            />
          </div>
          <button className="header_button">
            <GraphicEqOutlinedIcon />
          </button>
          <button className="header_button">
            <FilterAltOutlinedIcon />
          </button>
        </div>
        <div className="header_bar_right">
          <button className="header_button_add" onClick={() => setModal(true)}>
            <AddIcon />
          </button>
        </div>
      </div>
      {modal === true && <Modal setModal={setModal} />}
    </div>
  );
}

export default Header;
