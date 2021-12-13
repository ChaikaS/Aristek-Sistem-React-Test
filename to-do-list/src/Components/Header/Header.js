import "./header.scss";
import contentImageLogo from "../../Image/logo.png";
import contentImageUser from "../../Image/image-user.png";
import contentImageBurgerMenu from "../../Image/image-burger-menu.png";
export default function Header() {
  const imageLogo = <img src={contentImageLogo} alt="image logo" />;
  const imageUser = <img src={contentImageUser} alt="image user" />;
  const imageBurgerMenu = <img src={contentImageBurgerMenu} alt="image burger menu" />;
  return (
    <header className="header__conteiner">
      <div className="header__logo">
        <div>{imageLogo}</div>
        <div>To-Do</div>
      </div>
      <div className="header__text">Tasks</div>
      <div className="header__user">
        <div className="header__user_name">Leanne Graham</div>
        <div className="header__user_image">{imageUser}</div>
        <div className="header__burger-menu">{imageBurgerMenu}</div>
      </div>
    </header>
  );
}
