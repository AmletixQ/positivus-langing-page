import SectionHeader from "../../SectionHeader/SectionHeader";
import Slider from "../../Slider/Slider";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section>
      <SectionHeader>
        <h2>Testimonials</h2>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </SectionHeader>
      <Slider />
    </section>
  );
};

export default Testimonials;
