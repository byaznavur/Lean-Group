import Navbar from "../UI/navbar";
import logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import "./header.scss";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(true);

  const toggleBurger = () => {
    setOpen(!open);
  };
  return (
    <header>
      <div className="container header">
        <div>
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <Navbar open={open} />

        <div className="changeLang">
          <a href="#">RU </a> <span>|</span> <a href="#">EN</a>
        </div>
        <button onClick={toggleBurger} className="burger">
          {open ? <GiHamburgerMenu /> : <IoClose />}
        </button>
      </div>
    </header>
  );
};

export default Header;
