
import Navbar from "../src/components/Navbar";
import SliderHero from "../src/components/SliderHero";
import Hero from "../src/components/Hero";
import AnimageSeries from "../src/components/AnimageSeries";
import AllShifter from "../src/components/AllShifter";
import Testimonial from "../src/components/Testimonial";
import PenName from "../src/components/PenName";
import Series from "../src/components/Series";
import NewsLetter from "../src/components/NewsLetter";

import { library} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";



library.add(fas);

const Home = () => {
  return (
    <div className="bg-black">
      <>
        <Navbar/>
        <SliderHero/>
        <Hero />
        <AnimageSeries/>
        <AllShifter/>
        <PenName/>
        <Testimonial/>
        <Series/>
        <NewsLetter/>
     
      </>
    </div>
  );
};

export default Home;
