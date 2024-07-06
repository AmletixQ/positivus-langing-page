import BigCard from "../../Cards/BigCard/BigCard";
import Cards from "../../Cards/Cards";
import SectionHeader from "../../SectionHeader/SectionHeader";
import "./Services.scss";

const Services = () => {
  return (
    <section>
      <SectionHeader>
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </SectionHeader>
      <Cards />
      <BigCard />
    </section>
  );
};

export default Services;
