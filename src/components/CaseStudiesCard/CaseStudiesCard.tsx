import Link from "../Link/Link";
import "./CaseStudiesCard.scss";

const CaseStudiesCard = () => {
  return (
    <div className="casestudiescard-container">
      <div className="card-item">
        <p>
          For a local restaurant, we implemented a targeted PPC campaign that
          resulted in a 50% increase in website traffic and a 25% increase in
          sales.
        </p>

        <Link>
          <Link.P style={{ color: "var(--green)" }} />
          <Link.Arrow simple={"green"} />
        </Link>
      </div>
      <hr />
      <div className="card-item">
        <p>
          For a local restaurant, we implemented a targeted PPC campaign that
          resulted in a 50% increase in website traffic and a 25% increase in
          sales.
        </p>

        <Link>
          <Link.P style={{ color: "var(--green)" }} />
          <Link.Arrow simple={"green"} />
        </Link>
      </div>
      <hr />
      <div className="card-item">
        <p>
          For a local restaurant, we implemented a targeted PPC campaign that
          resulted in a 50% increase in website traffic and a 25% increase in
          sales.
        </p>

        <Link>
          <Link.P style={{ color: "var(--green)" }} />
          <Link.Arrow simple={"green"} />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudiesCard;
