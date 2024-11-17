import "./navbar.scss";
const Navbar = (props) => {
  const { open } = props;

  console.log(open);

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
    <nav className={`${open ? "" : "show"}`}>
      {navs.map((nav, i) => (
        <a key={i} href="#">
          {nav}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
