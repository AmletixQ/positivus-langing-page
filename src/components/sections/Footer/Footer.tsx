import Navbar from "../../Navbar/Navbar";
import SocialIcons from "../../Icons/Social/SocialIcons";
import LogoIcon from "../../Icons/Logo/LogoIcon";
import "./Footer.scss";
import Button from "../../Button/Button";

const Footer = () => {
  return (
    <footer>
      <div className="heading">
        <LogoIcon color="white" />
        <Navbar />
        <SocialIcons />
      </div>
      <div className="footer-content-container">
        <div className="content">
          <div className="contacts">
            <h4>Contacts Us</h4>
            <div className="info">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <div className="address">
                <p>Address: 1234 Main St</p>
                <p>Moonstone City, Stardust State 12345</p>
              </div>
            </div>
          </div>
          <form>
            <input type="email" placeholder="Email" />
            <Button intent={"tertiary"}>Subscribe to news</Button>
          </form>
        </div>

        <hr />
        <div className="privacy-policy">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
