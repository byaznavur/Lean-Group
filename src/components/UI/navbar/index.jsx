import "./navbar.scss";
const Navbar = () => {
  const navs = [
    "Продукция",
    "Сертификаты",
    "Наша команда",
    "О нас",
    "Новости",
    "Вакансии",
    "Контакты",
  ];

  return (
    <nav>
      {navs.map((nav, i) => (
        <a key={i} href="#">
          {nav}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
