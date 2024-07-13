
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimageSeries from "./components/AnimageSeries";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import PenName from "./components/PenName";
import { library} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


library.add(fas);

const App = () => {
  return (
    <div className="bg-black">
      <>
        <Navbar/>
        <Hero />
        <AnimageSeries/>
        <About/>
        <Testimonial/>
        <PenName/>
    
      </>
    </div>
  );
};

export default App;
