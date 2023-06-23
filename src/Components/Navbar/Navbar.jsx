import "./Navbar.css";
import { NavLink } from "react-router-dom";
import React, {useContext} from "react";
import {ShoppingCartContext} from '../../Context/Context.jsx';
 
const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <div className="nav-container">
      <nav className="flex bg-gray-100 justify-between items-center fixed top-0 z-10 w-full py-5 px-8 txt-sm font-light">
        <ul className="flex items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink
              to="/"
             
            >
              Shopped
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clothes"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/furnitures"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toys"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/others"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Others
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          <li className="">
            <p className="text-black/60">github.com/NaoRYK</p>
          </li>
          <li>
            <NavLink to="/orders"  className={({ isActive }) => (isActive ? activeStyle : undefined)}>My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/account" className={({ isActive }) => (isActive ? activeStyle : undefined)}>My Account</NavLink>
          </li>
          <li>
            <NavLink to="/signin" className={({ isActive }) => (isActive ? activeStyle : undefined)}>Sign In</NavLink>
          </li>
          <li>
            <NavLink>
              <p>🛒 {useContext(ShoppingCartContext).count}</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
