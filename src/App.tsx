import React from "react";
import Hero from "./components/Hero";
import { library, Library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const App = () => {
  return (
    <div>
      <>
        <Hero />
      </>
    </div>
  );
};

export default App;
