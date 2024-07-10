import il7 from "../../../assets/services/Illustration-7.svg";
import Button from "../../Button/Button";
import "./BigCard.scss";

const BigCard = () => {
  return (
    <div className="bigcard">
      <div className="bigcard-content">
        <h3>Let’s make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button intent={"primary"}>Get your proposal</Button>
      </div>

      <img src={il7} alt="il7" />
    </div>
  );
};

export default BigCard;
