import { FC } from "react";
import Link from "../../Link/Link";
import "./Card.scss";

export interface CardProps {
  title: string;
  illustration: string;
  cardColor: "bc-gray" | "bc-green" | "bc-black";
  titleColor: "bc-green" | "bc-gray";
  circleColor: "black" | "white";
  linkColor: "green" | "black";
}

const Card: FC<CardProps> = ({
  title,
  illustration,
  cardColor,
  titleColor,
  circleColor,
  linkColor,
}) => {
  return (
    <div className={`card ${cardColor}`}>
      <div className="card-content">
        <h3 className={titleColor}>{title}</h3>
        <Link>
          <Link.Arrow
            circled={circleColor}
            simple={linkColor}
            rotated={"rotated"}
          />
          <Link.P />
          <img src={illustration} alt="Il1" />
        </Link>
      </div>
      <img className="card-illustration" src={illustration} alt="Il1" />
    </div>
  );
};

export default Card;
