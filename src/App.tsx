import Heading from "./components/sections/Heading/Heading";
import Services from "./components/sections/Services/Services";
import CaseStudies from "./components/sections/CaseStudies/CaseStudies";
import WorkingProcess from "./components/sections/WorkingProcess/WorkingProcess";
import Team from "./components/sections/Team/Team";
import Testimonials from "./components/sections/Testimotional/Testimonials";
import "./App.scss";

const App = () => {
  return (
    <main>
      <Heading />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
    </main>
  );
};

export default App;
