import React from 'react';
import logo from '../assets/images/logo (1).png';

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top bg-light w-100"  style={{ zIndex: 1030 }}>
          <div className="container-fluid px-5 px-lg-5">
      
            <a className="navbar-brand" href="">
              <img
                src={logo}
                alt="Logo"
                width="160"
                height="40"
                className="d-inline-block align-text-top"
              />
            </a>

     
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

       
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center" style={{ gap: "30px" }}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Courses
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Membership
                  </a>
                  
                </li>
                   <li className="nav-item">
                  <a className="nav-link active" href="#">
                     <i className="fas fa-shopping-cart" ></i>
                  </a>
                  
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <button 
                      className='btn rounded-0 me-3' 
                      style={{ 
                        backgroundColor: 'blue', 
                        color: 'white', 
                        width: "140px",
                        minWidth: "140px"
                      }}
                    >
                      Login
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
}

export default Navbar;