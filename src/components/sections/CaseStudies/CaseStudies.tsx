import CaseStudiesCard from "../../CaseStudiesCard/CaseStudiesCard";
import SectionHeader from "../../SectionHeader/SectionHeader";
import "./CaseStudies.scss";

const CaseStudies = () => {
  return (
    <section className="casestudies-section">
      <SectionHeader>
        <h2>Case Studies</h2>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </SectionHeader>
      <CaseStudiesCard />
    </section>
  );
};

export default CaseStudies;
