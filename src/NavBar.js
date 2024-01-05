// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import vendingList from "./vendingList";

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "lightgreen", padding: "1rem" }}>
      <Link to="/">Home</Link>
      {vendingList.map((item) => (
        <Link key={item.id} to={item.path} style={{ margin: "0 10px" }}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
