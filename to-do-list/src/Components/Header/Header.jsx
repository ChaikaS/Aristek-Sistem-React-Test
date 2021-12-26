import "./header.scss";
import contentImageLogo from "../../assets/image/logo.png";
import contentImageUser from "../../assets/image/image-user.png";
import contentImageBurgerMenu from "../../assets/image/image-burger-menu.png";

export default function Header() {
  return (
    <header className="header__conteiner">
      <div className="header__logo">
        <div>{<img src={contentImageLogo} alt="images logo" />}</div>
        <div>To-Do</div>
      </div>
      <div className="header__text">Tasks</div>
      <div className="header__user">
        <div className="header__user_name">Leanne Graham</div>
        <div className="header__user_image">{<img src={contentImageUser} alt="images user" />}</div>
        <div className="header__burger-menu">{<img src={contentImageBurgerMenu} alt="images burger" />}</div>
      </div>
    </header>
  );
}
