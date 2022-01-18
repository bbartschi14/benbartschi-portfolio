import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./utilities.css";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Navbar from "./components/modules/Navbar";
import NotFound from "./components/pages/NotFound";
import PageWrapper from "./components/modules/PageWrapper";
import Reel from "./components/pages/Reel";
import Footer from "./components/modules/Footer";
import About from "./components/pages/About";
import Archive from "./components/pages/Archive";

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function App() {
  const { pathname } = useLocation();
  const prevPath: any = usePrevious<string>(pathname);
  const previousPathRef = useRef("");

  useEffect(() => {
    // Scroll to top on route changes
    const shouldPreventScrollOnBack = false;
    if (!(shouldPreventScrollOnBack && previousPathRef.current === pathname)) {
      window.scrollTo(0, 0);
    }
    previousPathRef.current = prevPath;
  }, [pathname]);

  return (
    <div className="App-wrapper" style={{ height: "100vh" }}>
      {pathname !== "/" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/portfolio/*"
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
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/archive/*"
          element={
            <PageWrapper>
              <Archive />
            </PageWrapper>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {pathname !== "/" ? <Footer /> : null}
    </div>
  );
}

export default App;
