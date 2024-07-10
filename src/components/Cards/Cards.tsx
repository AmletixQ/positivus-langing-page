import il1 from "../../assets/services/Illustration-1.svg";
import il2 from "../../assets/services/Illustration-2.svg";
import il3 from "../../assets/services/Illustration-3.svg";
import il4 from "../../assets/services/Illustration-4.svg";
import il5 from "../../assets/services/Illustration-5.svg";
import il6 from "../../assets/services/Illustration-6.svg";
import Card, { CardProps } from "./Card/Card";
import "./Cards.scss";

const cards: CardProps[] = [
  {
    title: "Search engine optimization",
    illustration: il1,
    cardColor: "bc-gray",
    titleColor: "bc-green",
    circleColor: "black",
    linkColor: "green",
  },
  {
    title: "Pay-per-click advertising",
    illustration: il2,
    cardColor: "bc-green",
    titleColor: "bc-gray",
    circleColor: "black",
    linkColor: "green",
  },
  {
    title: "Social Media Marketing",
    illustration: il3,
    cardColor: "bc-black",
    titleColor: "bc-gray",
    circleColor: "white",
    linkColor: "black",
  },
  {
    title: "Email Marketing",
    illustration: il4,
    cardColor: "bc-gray",
    titleColor: "bc-green",
    circleColor: "black",
    linkColor: "green",
  },
  {
    title: "Content Creation",
    illustration: il5,
    cardColor: "bc-green",
    titleColor: "bc-gray",
    circleColor: "black",
    linkColor: "green",
  },
  {
    title: "Analytics and Tracking",
    illustration: il6,
    cardColor: "bc-black",
    titleColor: "bc-gray",
    circleColor: "white",
    linkColor: "black",
  },
];

const Cards = () => {
  return (
    <div className="cards">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  );
};

export default Cards;
