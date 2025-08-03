import React from "react";
import { menuData } from "./NavBarComponents/MenuData";
import { DropdownItem } from "./NavBarComponents/DropdownItem";
import "../styles/Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {menuData.map((item, index) => (
        <DropdownItem key={index} item={item} isTopLevel={true} />
      ))}
    </nav>
  );
};
