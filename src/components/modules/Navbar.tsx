import React from "react";
import "./Navbar.css";

const { useState } = React;

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className="Navbar-outer u-flexColumn u-flex-justifyCenter">
      <div className="Navbar-title">I'm Ben!</div>
    </div>
  );
};

export default Navbar;
