
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimageSeries from "./components/AnimageSeries";
import AllShifter from "./components/AllShifter";
import About from "./components/About";
// import Testimonial from "./components/Testimonial";
import PenName from "./components/PenName";
import Series from "./components/Series";

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
        <AllShifter/>
        <About/>
        <PenName/>
        {/* <Testimonial/> */}
        <Series/>
      </>
    </div>
  );
};

export default App;
