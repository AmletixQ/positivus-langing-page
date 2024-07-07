import Button from "../Button/Button";
import LogoIcon from "../Icons/Logo/LogoIcon";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <LogoIcon color="black" />
      <div>
        <Navbar />
        <Button intent={"secondary"}>Request a quote</Button>
      </div>
    </div>
  );
};

export default Header;
