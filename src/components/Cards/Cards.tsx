import il1 from "../../assets/services/Illustration-1.svg";
import il2 from "../../assets/services/Illustration-2.svg";
import il3 from "../../assets/services/Illustration-3.svg";
import il4 from "../../assets/services/Illustration-4.svg";
import il5 from "../../assets/services/Illustration-5.svg";
import il6 from "../../assets/services/Illustration-6.svg";
import Link from "../Link/Link";
import Card from "./Card/Card";
import "./Cards.scss";

const Cards = () => {
  return (
    <div className="cards">
      <Card className="bc-gray">
        <Card.Content>
          <Card.Title>
            <h3 className="bc-green">Search engine optimization</h3>
          </Card.Title>
          <Link>
            <Link.Arrow circled={"black"} simple={"green"} />
            <Link.P />
          </Link>
        </Card.Content>
        <Card.Illustration src={il1} alt="Il1" />
      </Card>
      <Card className="bc-green">
        <Card.Content>
          <Card.Title>
            <h3 className="bc-gray">Pay-per-click advertising</h3>
          </Card.Title>
          <Link>
            <Link.Arrow circled={"black"} simple={"green"} />
            <Link.P />
          </Link>
        </Card.Content>
        <Card.Illustration src={il2} alt="Il2" />
      </Card>
      <Card className="bc-black">
        <Card.Content>
          <Card.Title>
            <h3 className="bc-gray">Social Media Marketing</h3>
          </Card.Title>
          <Link color={"white"}>
            <Link.Arrow circled={"white"} simple={"black"} />
            <Link.P />
          </Link>
        </Card.Content>
        <Card.Illustration src={il3} alt="Il3" />
      </Card>
      <Card className="bc-gray">
        <Card.Content>
          <Card.Title>
            <h3 className="bc-green">Email Marketing</h3>
          </Card.Title>
          <Link>
            <Link.Arrow circled={"black"} simple={"green"} />
            <Link.P />
          </Link>
        </Card.Content>
        <Card.Illustration src={il6} alt="Il6" />
      </Card>
      <Card className="bc-green">
        <Card.Content>
          <Card.Title>
            <h3 className="bc-gray">Content Creation</h3>
          </Card.Title>
          <Link>
            <Link.Arrow circled={"black"} simple={"green"} />
            <Link.P />
          </Link>
        </Card.Content>
        <Card.Illustration src={il4} alt="Il4" />
      </Card>
      <Card className="bc-black">
        <Card.Content>
          <Card.Title>
            <h3 className="bc-green">Analytics and Tracking</h3>
          </Card.Title>
          <Link color={"white"}>
            <Link.Arrow circled={"white"} simple={"black"} />
            <Link.P />
          </Link>
        </Card.Content>
        <Card.Illustration src={il5} alt="Il5" />
      </Card>
    </div>
  );
};

export default Cards;
