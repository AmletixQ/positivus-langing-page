import Accordion from "../../Accordion/Accordion";
import SectionHeader from "../../SectionHeader/SectionHeader";
import "./WorkingProcess.scss";

const WorkingProcess = () => {
  return (
    <section>
      <SectionHeader>
        <h2>Our Working Process</h2>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </SectionHeader>
      <Accordion />
    </section>
  );
};

export default WorkingProcess;
