import React from 'react'
import {Link, useNavigate  } from "react-router-dom";

export const Navbar = () => {
  let navigate= useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('token');
  navigate('/');
  }
 
 
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
           
            
          </ul>
          
          {!localStorage.getItem('token')?<form className='d-flex'>
          <Link className="btn btn-primary mx-1" to="/login" role="button"><i class="fa-solid fa-user me-2"></i> Login</Link>
          
          </form>:<button onClick={handleLogout} className='btn btn-danger'>Logout
          <i className="fa-solid fa-right-from-bracket ms-2"> </i></button>}
          
        </div>
      </div>
    </nav>
  );
};
