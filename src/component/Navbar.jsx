import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import img from "./Vidoes/photo.jpg";
import "./Navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg  bg-white shadow flex sticky z-30 top-0 max-h-fit max-w-full ">
      <div className="container-fluid">
        <Link
          className="navbar-brand font-mono font-bold text-xl  text-cyan-950"
          to="/"
        >
          VISHNU GURJAR
        </Link>
        <button
          className=" menu navbar-toggler"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="collapse navbar-collapse font-mono text-xs h-100 d-flex justify-content-end  "
          id="navbarNav"
        >
          <ul className={menuOpen ? "open" : ""}>
            <li className="nav-item">
              <Link className="nav-NavLink " onClick={() => setMenuOpen(false)} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item  ">
              <Link className="nav-NavLink" onClick={() => setMenuOpen(false)} to="/Project">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-NavLink" onClick={() => setMenuOpen(false)} to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-NavLink" onClick={() => setMenuOpen(false)} to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-7  bg-cover rounded-full">
              <img
                style={{ width: "30px, bacground-cover" }}
                alt=" CSS Navbar component"
                src={img}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100  text-sm rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="http://localhost:5175/ "
                className="justify-between text-sm"
                target="_blank"
              >
                WebSite
                <span className="badge text-xs">Personal</span>
              </Link>
            </li>
            <NavLink to="#">Settings</NavLink>
            <NavLink to="#">Logout</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;