import "./herro.scss";
import { FaLinkedin, FaVk } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Button from "../UI/button/button";

const Herro = () => {
  return (
    <div className="herro">
      <div className="container herro-wrapper">
        <div className="herro-wrapper-info">
          <span>LEANGROUP - тубы и этикетки</span>
          <h1>Ламинатные тубы</h1>
          <p>
            Используются для производства зубных паст. Широко применяются в
            <br />
            сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
            <br />
            химии и DIY (Do-it-Yourself).
          </p>
          <Button content="Каталог" contentName="btn-cataolog" />

          <div className="slider">
            <Button contentName="btn-dot" />
            <Button contentName="btn-dot" />
            <Button contentName="btn-dot" />
          </div>
        </div>
        <div className="herro-wrapper-social">
          <a href="#">
            <FaVk />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Herro;
