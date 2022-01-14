import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./utilities.css";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Navbar from "./components/modules/Navbar";
import NotFound from "./components/pages/NotFound";
import PageWrapper from "./components/modules/PageWrapper";
import Reel from "./components/pages/Reel";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App-wrapper" style={{ height: "100vh" }}>
      {pathname !== "/" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/portfolio"
          element={
            <PageWrapper>
              <Portfolio />
            </PageWrapper>
          }
        />
        <Route
          path="/reel"
          element={
            <PageWrapper>
              <Reel />
            </PageWrapper>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
