import React from "react";
import Hero from "./components/Hero";
import AnimageSeries from "./components/AnimageSeries";
import About from "./components/About";
import { library} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


library.add(fas);

const App = () => {
  return (
    <div className="bg-black">
      <>
        <Hero />
        <AnimageSeries/>
  
        <About/>

      </>
    </div>
  );
};

export default App;
