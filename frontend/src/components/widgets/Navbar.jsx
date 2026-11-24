import { useState } from "react";
import store from "../../assets/store.png";
import { NavLink } from "react-router-dom";
import AuthModal from "../AuthModal"; 

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("login"); // "login" or "signup"

  const openModal = (mode) => {
    setModalMode(mode);
    setIsModalOpen(true);
  };
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
          <span className="font-semibold text-black text-xl">
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
            <button
              onClick={() => openModal("login")}
              className="bg-[#BAD8E6] rounded-[10px] px-7 py-2 text-sky-700 font-semibold hover:bg-sky-200 transition"
            >
              Login
            </button>
            <button
              onClick={() => openModal("signup")}
              className="bg-[#3E9363] rounded-[10px] px-6 py-2 text-white font-semibold hover:bg-emerald-700 transition"
            >
              Sign Up
            </button>
          </div>
      </div>
      
      <AuthModal
        key={`${isModalOpen}-${modalMode}`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialMode={modalMode}
      />
    </div>
  );
};

export default Navbar;
