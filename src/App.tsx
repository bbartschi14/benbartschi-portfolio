import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./utilities.css";
import Home from "./components/pages/Home";
import Navbar from "./components/modules/Navbar";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="u-flex" style={{ height: "100vh" }}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
