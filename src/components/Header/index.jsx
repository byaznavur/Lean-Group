import Navbar from "../UI/navbar";
import logo from "../../assets/images/logo.png";
import "./header.scss";
const Header = () => {
  return (
    <header>
      <div className="container header">
        <div>
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <Navbar />

        <div>
          <a href="#">RU </a> <span>|</span> <a href="#">EN</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
