import CaseStudies from "./components/sections/CaseStudies/CaseStudies";
import Heading from "./components/sections/Heading/Heading";
import Services from "./components/sections/Services/Services";
import "./App.scss";
import WorkingProcess from "./components/sections/WorkingProcess/WorkingProcess";

const App = () => {
  return (
    <main>
      <Heading />
      <Services />
      <CaseStudies />
      <WorkingProcess />
    </main>
  );
};

export default App;
