import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import DarkMode from "../Darkmode";
import "./index.css";
const links = [
  {
    display: "Home",
    link: "/",
    icon: FaHome,
  },
  {
    display: "Login",
    link: "/login",
    icon: FaUserCircle,
  },
];
export default function Header() {
  return (
    <nav className="bg-black flex justify-between items-center h-20 p-4 w-full">
      <img src={Logo} className="w-6 h-6 text-yellow-300" alt="" />
      <p className="text-yellow-300 ml-4 font-semibold text-2xl mr-auto">
        PỏnHúp
      </p>
      <ul className="flex gap-6 list-none text-yellow-300 font-semibold">
        <DarkMode />
        {links.map((link) => (
          <li key={link.display}>
            <Link to={link.link}>
              <div>{React.createElement(link?.icon, { size: "20" })}</div>
              {link.display}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
