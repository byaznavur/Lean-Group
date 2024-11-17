import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Tasvirlarni array ko‘rinishida saqlash
const images = [
  "path/to/image1.jpg",
  "path/to/image2.jpg",
  "path/to/image3.jpg",
  "path/to/image4.jpg",
  // Qo‘shimcha tasvirlar kerak bo‘lsa, qo‘shishingiz mumkin
];

const Responsive = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`Slide ${index + 1}`} />
        ))}
      </Slider>
    </div>
  );
};

export default Responsive;
