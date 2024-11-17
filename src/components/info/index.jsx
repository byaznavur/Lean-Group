import "./style.scss";
import Button from "./../UI/button/button";
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const InfoProducts = () => {
  return (
    <div className="infoproducts container">
      <h3>
        Получить подробную <span>информацию</span>
      </h3>
      <p>
        Просто заполните форму, наш менеджер свяжется с вами в ближайшее время
      </p>

      <div className="commmentOurs">
        <div className="tellOurs">
          <span>
            <MdPerson />
          </span>
          <input type="text" placeholder="Ваше имя" />
        </div>

        <div className="tellOurs">
          <span>
            <FaPhoneAlt />
          </span>
          <input type="number" placeholder="+375 (29) 0000000" />
        </div>
      </div>

      <textarea placeholder="Комментарий"></textarea>

      <Button content="Получить информацию" contentName="contact-btn" />
    </div>
  );
};

export default InfoProducts;
