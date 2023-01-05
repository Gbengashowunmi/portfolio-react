import React from "react";
import {
  IoBriefcaseSharp,
  IoHome,
  IoMailOpenSharp,
  IoPerson,
} from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { NavLink } from "react-router-dom";

export default function Navigation() {

  
  return (
    <ul>
      <li>
        <NavLink to="/">
          <IoHome className="react_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          <IoPerson className="react_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">
          <IoBriefcaseSharp className="react_icon" />
        </NavLink>
      </li>
      <li>
        <ImNewspaper className="react_icon" />
      </li>
      <li>
        <IoMailOpenSharp className="react_icon" />
      </li>
    </ul>
  );
}
