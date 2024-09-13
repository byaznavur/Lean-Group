import "./button.scss";
const Button = ({ content, contentName }) => {
  return <button className={contentName}>{content}</button>;
};

export default Button;
