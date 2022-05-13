import React from 'react'
import {Link, useLocation, useNavigate  } from "react-router-dom";

export const Navbar = () => {
  let navigate= useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('token');
  navigate('/');
  }
  let location = useLocation();
 
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container-fluid">
       
        <Link className="navbar-brand"  to="/"><h3>SKYNotE</h3></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/"><h6>Home</h6></Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`}  to="/about"><h6>About</h6></Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/notes"? "active": ""}`}  to="/notes"><h6>Your Notes</h6></Link>
            </li>
          </ul>
          {!localStorage.getItem('token')?<form className='d-flex'>
          <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
          
          </form>:<button onClick={handleLogout} className='btn btn-danger mx-1'>Logout
          <i className="fa-solid fa-right-from-bracket mx-2"></i></button>}
          
        </div>
      </div>
    </nav>
  );
};
