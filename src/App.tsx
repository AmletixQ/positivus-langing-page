import CaseStudies from "./components/sections/CaseStudies/CaseStudies";
import Heading from "./components/sections/Heading/Heading";
import Services from "./components/sections/Services/Services";
import "./App.scss";

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
