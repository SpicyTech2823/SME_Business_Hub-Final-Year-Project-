import React from "react";
import store from "../../assets/store.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // style for active and inactive nav links
  const navLinkStyles = ({ isActive }) => {
    return `font-semibold pb-2 transition-all duration-200 ${
      isActive
        ? "text-sky-600 border-b-2 border-sky-600"
        : "text-black hover:text-sky-600"
    }`;
  };
  return (
    <div className="sticky top-0 z-50 flex flex-col bg-white shadow-sm">
      <div className="flex items-center justify-between bg-white p-4">
        <div className="flex items-center">
          <img src={store} alt="Store" className="h-10 w-10 mr-2" />
          <span className="font-semibold text-black font text-xl">
            SME Business Hub
          </span>
        </div>
        <div className="flex items-center space-x-8">
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>
          <NavLink to="/business" className={navLinkStyles}>
            Businesses
          </NavLink>
          <NavLink to="/about" className={navLinkStyles}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkStyles}>
            Contact
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-[#BAD8E6] rounded-[10px] px-7 py-2">
            <a href="#" className="text-sky-700  font-semibold hover:text-sky-600">
              Login
            </a>
          </div>
          <div className="bg-[#3E9363] rounded-[10px] px-6 py-2">      
            <a href="#" className="text-white font-semibold hover:text-sky-600">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
