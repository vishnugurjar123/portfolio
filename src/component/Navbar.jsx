import React from 'react'
import { useState } from 'react';
import{Link,NavLink} from'react-router-dom';
import img from './Vidoes/photo.jpg'
import "./Navbar.css";
const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='shadow flex  sticky z-30 top-0 h-full w-full'>
      <Link to="/" className="title navbar-brand font-mono font-bold text-xl  text-cyan-950 ">
        VISHNU GURJAR
      </Link>
      <button className=" menu navbar-toggler" onClick={() => setMenuOpen(!menuOpen)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     
        <span></span>
        <span></span>
        <span></span>
        <span></span>
  
      </button>
      {/* <ul className={menuOpen ? "open" : ""}> */}
      <div className="collapse navbar-collapse font-mono text-xl h-100 d-flex justify-content-end  " id="navbarNav">
      <ul className={menuOpen ? "open" : ""}   >
           <li className="nav-item  hover:text-orange-100">
           <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Project">Project</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/About">About</Link>
           </li>
          <li className="nav-item">
           <Link className="nav-link" to="/Contact">Contact</Link>
          </li>

         </ul>
         </div>

    </nav>
  )
}

export default Navbar