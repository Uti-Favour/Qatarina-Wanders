import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "../pages/Home";
import Books from "../pages/Books";
import AboutHer from "../pages/AboutHer";
import Contact from "../pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<AboutHer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
