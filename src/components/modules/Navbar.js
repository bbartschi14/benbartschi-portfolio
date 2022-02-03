import { useState, useCallback } from "react";
import "./Navbar.css";
import { slide as Menu } from "react-burger-menu";
import { useWindowDimensions } from "../modules/WindowHelpers";
import { useLocation, Link } from "react-router-dom";
import logo from "../../resources/logo512.png";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";

// console.log(logo);
var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "25px",
    top: "25px",
  },
  bmBurgerBars: {
    background: "#ffffff77",
  },
  bmBurgerBarsHover: {
    background: "#ffffffff",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    // background: "#373a47",
    backgroundColor: "rgb(94, 94, 94)",
    padding: "0",
    fontSize: "1.15em",
    height: "100%",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    // padding: "0.8em",
    // paddingRight: "1.6em",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const NavbarLinks = (props) => {
  const { pathname } = useLocation();

  const handleOnClick = (e) => {
    props.setMenuOpen(false);
  };
  return (
    <>
      <Link
        to="/"
        className={"Navbar-link u-noselect" + (pathname == "/" ? " Navbar-selected" : "")}
        onClick={handleOnClick}
      >
        <i>Desktop</i>
      </Link>
      <Link
        to="/portfolio"
        className={"Navbar-link u-noselect" + (pathname == "/portfolio" ? " Navbar-selected" : "")}
        onClick={handleOnClick}
      >
        Portfolio
      </Link>
      <Link
        to="/reel"
        className={"Navbar-link u-noselect" + (pathname == "/reel" ? " Navbar-selected" : "")}
        onClick={handleOnClick}
      >
        Reel
      </Link>
      <Link
        to="/about"
        className={"Navbar-link u-noselect" + (pathname == "/about" ? " Navbar-selected" : "")}
        onClick={handleOnClick}
      >
        About
      </Link>
      {props.enableExtras ? (
        <>
          <Link
            to="/archive"
            className={
              "Navbar-link u-noselect" + (pathname == "/archive" ? " Navbar-selected" : "")
            }
            onClick={handleOnClick}
          >
            Archive
          </Link>
        </>
      ) : null}
    </>
  );
};
const Navbar = (props) => {
  const { height, width } = useWindowDimensions();
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Menu
        styles={styles}
        isOpen={isMenuOpen}
        onStateChange={(state) => setMenuOpen(state.isOpen)}
      >
        <div style={{ display: "flex", flexDirection: "column", padding: "0.8em" }}>
          <NavbarLinks isVertical setMenuOpen={setMenuOpen} enableExtras />
        </div>
        <Footer />
      </Menu>
      <div className="Navbar-outer">
        <Link className="Navbar-title u-noselect" to="/portfolio">
          <img src={logo} className="Navbar-logo"></img>
          <div style={{ paddingLeft: "16px", textTransform: "none", color: "white" }}>
            Coding / Graphics
          </div>
        </Link>

        {width > 768 ? (
          <div className="Navbar-links">
            <NavbarLinks setMenuOpen={(val) => {}} />
          </div>
        ) : null}
      </div>
      {/* <div className="UnderConstruction">
        Site is currently under construction. Updates coming soon!
        <FontAwesomeIcon icon={faWrench} style={{ marginLeft: "8px", color: "lightgray" }} />
      </div> */}
    </>
  );
};

export default Navbar;
