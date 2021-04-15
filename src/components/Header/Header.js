import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import tinderLogo from "../../images/tinder_logo.png";
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img className="header__logo" src={tinderLogo} alt="" />

      <IconButton>
        <ForumIcon fontSize="Large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
