import Button from "../../Button/Button";
import Header from "../../Header/Header";
import Illustration from "../../../assets/header-illustration/Illustration.svg";
import "./Heading.scss";
import Partners from "../../Partners/Partners";

const Heading = () => {
  return (
    <section>
      <Header />
      <div className="heading-container">
        <div className="heading-content">
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button intent={"primary"}>Book a consultation</Button>
        </div>
        <img src={Illustration} alt="Illustration" />
      </div>
      <Partners />
    </section>
  );
};

export default Heading;
