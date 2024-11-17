import { newData } from "../../data";
import "./style.scss";
const Product = () => {
  return (
    <div className="Products container">
      <h3>Новости</h3>

      <div className="newCards">
        {newData.map((el, i) => (
          <div key={i} className="newCard">
            <img src={el.img} alt={el.title} />
            <h4>{el.date}</h4>
            <p>{el.desc}</p>
          </div>
        ))}
      </div>

      <button className="cardButton">Все новости</button>
    </div>
  );
};

export default Product;
