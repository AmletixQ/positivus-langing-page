import Button from "../Button/Button";
import LogoIcon from "../Icons/Logo/LogoIcon";
import MenuBurger from "../MenuBurger/MenuBurger";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <LogoIcon color="black" />
      <div className="header-navbar">
        <Navbar />
        <Button intent={"secondary"}>Request a quote</Button>
      </div>
      <MenuBurger />
    </div>
  );
};

export default Header;
