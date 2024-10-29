import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#604a8fc7]">
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwU-9yeWOnpGGlnyBAQtk2jKT8urTPcwy2mw&s"
              alt="logo"
            />
          </div>
        </NavLink>

        <div>
          <NavLink to="/">
            <h2>Home</h2>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
