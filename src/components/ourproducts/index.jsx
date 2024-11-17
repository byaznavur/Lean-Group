import Button from "../UI/button/button";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import "./style.scss";
const OurProducts = () => {
  return (
    <div className="ourproducts container">
      <h2>Наша продукция</h2>
      <div className="productsbtn">
        <Button contentName="btn-products" content="Ламинатные тубы" />
        <Button contentName="btn-products" content="Экструзионные тубы" />
        <Button contentName="btn-products" content="Другая упаковка" />
      </div>

      <div className="ourproductsimg">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>

      <Button contentName="btn-products" content="Перейти в каталог" />
    </div>
  );
};

export default OurProducts;
