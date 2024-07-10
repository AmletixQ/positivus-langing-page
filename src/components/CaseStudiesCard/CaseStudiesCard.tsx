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
          For a B2B software company, we developed an SEO strategy that resulted
          in a first page ranking for key keywords and a 200% increase in
          organic traffic.
        </p>
        <Link>
          <Link.P style={{ color: "var(--green)" }} />
          <Link.Arrow simple={"green"} />
        </Link>
      </div>
      <hr />
      <div className="card-item">
        <p>
          For a national retail chain, we created a social media marketing
          campaign that increased followers by 25% and generated a 20% increase
          in online sales.
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
