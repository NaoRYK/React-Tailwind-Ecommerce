import "./Navbar.css";
import { NavLink } from "react-router-dom";
import React, {useContext} from "react";
import {ShoppingCartContext} from '../../Context/Context.jsx';
 
const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  const context = useContext(ShoppingCartContext);
  return (
    <div className="nav-container">
      <nav className="flex bg-gray-100 justify-between items-center fixed top-0 z-10 w-full py-5 px-8 txt-sm font-light">
        <ul className="flex items-center gap-3">
          <p className="page-title font-semibold text-lg">
            <NavLink
              to="/"
              onClick={() => {context.setSearchedCategory(null)
               }}
             
            >
              Shopped
            </NavLink>
          </p>
          <li >
            <NavLink
              to="/all"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => {context.setSearchedCategory("all") }}
             
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clothes"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => {context.setSearchedCategory("clothes")}}
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/furnitures"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => {context.setSearchedCategory("furniture")}}
            >
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shoes"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => {context.setSearchedCategory("shoes")}}
            >
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/others"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => {context.setSearchedCategory("others")}}
            >
              Others
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          <li className="">
            <a  href="https://github.com/NaoRYK" className="text-emerald-500/50">github.com/NaoRYK</a>
          </li>
          <li>
            <NavLink to="/orders"  className={({ isActive }) => (isActive ? activeStyle : undefined)}  >My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/account" className={({ isActive }) => (isActive ? activeStyle : undefined)}>My Account</NavLink>
          </li>
          <li>
            <NavLink to="/signin" className={({ isActive }) => (isActive ? activeStyle : undefined)}>Sign In</NavLink>
          </li>
          <li>
            <NavLink>
              <p className="flex text-emerald-600" onClick={()=>{
                context.isCheckoutOpen ? context.closeCheckout() : context.openCheckout();
              }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
 {useContext(ShoppingCartContext).cartProducts.length}</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
