import "./App.scss";
import CaseStudies from "./components/sections/CaseStudies/CaseStudies";
import Heading from "./components/sections/Heading/Heading";
import Services from "./components/sections/Services/Services";

const App = () => {
  return (
    <main>
      <Heading />
      <Services />
      <CaseStudies />
    </main>
  );
};

export default App;
