
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Books from '../pages/Books';

import About from "../src/components/About";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/books' element={<Books/>}/>
<Route path='/about' element={<About/>}/>


      </Routes>
    </Router>
  );
};

export default App;
