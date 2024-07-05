import p1 from "../../assets/companies/logo-1.svg";
import p2 from "../../assets/companies/logo-2.svg";
import p3 from "../../assets/companies/logo-3.svg";
import p4 from "../../assets/companies/logo-4.svg";
import p5 from "../../assets/companies/logo-5.svg";
import p6 from "../../assets/companies/logo-6.svg";

import "./Partners.scss";
const Partners = () => {
  return (
    <div className="partners">
      <img src={p1} alt="Partner" />
      <img src={p2} alt="Partner" />
      <img src={p3} alt="Partner" />
      <img src={p4} alt="Partner" />
      <img src={p5} alt="Partner" />
      <img src={p6} alt="Partner" />
    </div>
  );
};

export default Partners;
