import React from 'react'
import { useState } from 'react';
import{Link,NavLink} from'react-router-dom';
import img from './Vidoes/photo.jpg'
import "./Navbar.css";
const Navbar = () => {
  // return (
  //   <header className='shadow flex  sticky z-30 top-0 h-full w-full'>

  // <nav className="navbar navbar-expand-lg  bg-white shadow ">
  //   <div className="container-fluid">
  //     <Link className="navbar-brand font-mono font-bold text-xl  text-cyan-950" to="/">VISHNU GURJAR</Link>
    
  //     <div className="collapse navbar-collapse font-mono text-xs h-100 d-flex justify-content-end  " id="navbarNav">
  //       <ul className="navbar-nav    justify-content-evenly w-50 mr-4">
  //         <li className="nav-item  hover:text-orange-100">
  //           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/Project">Project</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/About">About</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/Contact">Contact</Link>
  //         </li>

  //       </ul>
  //     </div>
  //     <div className="dropdown dropdown-end">
  //     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
  //       <div className="w-7  bg-cover rounded-full">
  //         <img style={{ width:"30px, bacground-cover"}}
  //           alt=" CSS Navbar component"
  //           src={img} />
  //       </div>
  //     </div>
  //     <ul
  //       tabIndex={0}
  //       className="menu menu-sm dropdown-content bg-base-100  text-sm rounded-box z-[1] mt-3 w-52 p-2 shadow">
  //       <li>
  //         <Link to="http://localhost:5175/ " className="justify-between text-sm" target="_blank">
  //            WebSite
  //           <span className="badge text-xs">Personal</span>
  //         </Link>
  //       </li>
  //       <Link to="#">Settings</Link>
  //       <Link to="#">Logout</Link>
  //     </ul>
  //   </div>
  //   </div>
  // </nav>


  // </header>
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
      <ul className={menuOpen ? "open" : ""}>
      <li className="nav-item  hover:text-orange-100">
            <NavLink  to="/">Home</NavLink>
          </li>
          <li className="nav-item">
           <NavLink  to="/Project">Project</NavLink>
           </li>
           <li className="nav-item">
             <NavLink  to="/About">About</NavLink>
          </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar