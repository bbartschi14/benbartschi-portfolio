import React from "react";
import "./Navbar.css";
import { slide as Menu } from "react-burger-menu";
import { useWindowDimensions } from "../modules/WindowHelpers";
import { useLocation, Link } from "react-router-dom";
import logo from "../../resources/logo64.png";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

console.log(logo);
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
    padding: "0.8em",
    paddingRight: "1.6em",
    height: "auto",
    display: "flex",
    flexDirection: "column",
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
  // console.log(pathname);
  return (
    <>
      <Link
        to="/"
        className={"Navbar-link u-noselect" + (pathname == "/" ? " Navbar-selected" : "")}
      >
        <i>Desktop</i>
      </Link>
      <Link
        to="/portfolio"
        className={"Navbar-link u-noselect" + (pathname == "/portfolio" ? " Navbar-selected" : "")}
      >
        Portfolio
      </Link>
      <Link
        to="/reel"
        className={"Navbar-link u-noselect" + (pathname == "/reel" ? " Navbar-selected" : "")}
      >
        Reel
      </Link>
      <Link
        to="/about"
        className={"Navbar-link u-noselect" + (pathname == "/about" ? " Navbar-selected" : "")}
      >
        About
      </Link>
    </>
  );
};
const Navbar = (props) => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      {width >= 768 ? null : (
        <Menu styles={styles}>
          <NavbarLinks isVertical />
        </Menu>
      )}
      <div className="Navbar-outer">
        <div className="Navbar-title u-noselect">
          <img src={logo} className="Navbar-logo"></img>
          <div style={{ paddingLeft: "16px", textTransform: "none" }}>Coding / Graphics</div>
        </div>

        {width > 768 ? (
          <div className="Navbar-links">
            <NavbarLinks />
          </div>
        ) : null}
      </div>
      <div className="UnderConstruction">
        Site is currently under construction. Updates coming soon!
        <FontAwesomeIcon icon={faWrench} style={{ marginLeft: "8px", color: "lightgray" }} />
      </div>
    </>
  );
};

export default Navbar;
