import{ useState } from "react";
import { Link, NavLink } from "react-router-dom";
import img from "./Vidoes/photo.jpg";
import "./Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#dff1ff] shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1
            className="text-3xl md:text-4xl font-extrabold italic bg-gradient-to-r from-pink-500 via-black to-cyan-400 bg-clip-text text-transparent"
          >
            Vishnu Gurjar
          </h1>
        </Link>

        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-7 h-1 bg-slate-700 rounded"></span>
          <span className="w-7 h-1 bg-slate-700 rounded"></span>
          <span className="w-7 h-1 bg-slate-700 rounded"></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-lg font-medium">
          <NavLink className="hover:text-cyan-700 transition" to="/">Home</NavLink>
          <NavLink className="hover:text-cyan-700 transition" to="/Project">Project</NavLink>
          <NavLink className="hover:text-cyan-700 transition" to="/About">About</NavLink>
          <NavLink className="hover:text-cyan-700 transition" to="/Contact">Contact</NavLink>
        </ul>

        {/* Profile Dropdown */}
        <div className="hidden lg:block dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full border border-cyan-400 shadow">
              <img src={img} alt="profile" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-sm rounded-xl z-[1] mt-3 w-48 p-2 shadow-lg"
          >
            <li>
              <Link to="/" target="_blank">
                Website <span className="badge badge-info">New</span>
              </Link>
            </li>
            <li><NavLink to="#">Settings</NavLink></li>
            <li><NavLink to="#">Logout</NavLink></li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md py-4 animate-slide-down">
          <ul className="flex flex-col items-center gap-6 text-lg font-medium">
            <NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/Project">Project</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/About">About</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/Contact">Contact</NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
