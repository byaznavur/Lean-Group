import card1 from "../../assets/images/card1.png"; // tasvirlarni import qilish
import card2 from "../../assets/images/card2.png"; // tasvirlarni import qilish
import card3 from "../../assets/images/card3.png"; // tasvirlarni import qilish
import card4 from "../../assets/images/card4.png"; // tasvirlarni import qilish
import card5 from "../../assets/images/card5.png"; // tasvirlarni import qilish
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.scss";
const Certification = () => {
  const imgData = [
    { img: card1 },
    { img: card2 },
    { img: card3 },
    { img: card4 },
    { img: card5 },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="certification container">
      <h2>Качество продукции подтверждают сертификаты</h2>

      <Slider className="cards" {...settings}>
        {imgData.map((el, index) => (
          <div key={index} className="certification-card">
            <img src={el.img} alt="Certificate" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certification;
