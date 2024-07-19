import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Books from "../pages/Books";
import AboutHer from "../pages/AboutHer";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<AboutHer />} />
      </Routes>
    </Router>
  );
};

export default App;
