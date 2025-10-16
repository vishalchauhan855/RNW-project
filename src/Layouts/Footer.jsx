import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 d-flex align-items-center" style={{height: "200px"}}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 text-center mb-3">
            <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="col-12 text-center">
            <div className="d-flex justify-content-center gap-3">
              <a 
                href="#" 
                className="text-light text-decoration-none fs-5 transition-all"
                style={{transition: 'all 0.3s ease'}}
                onMouseOver={(e) => e.target.style.color = '#1877f2'}
                onMouseOut={(e) => e.target.style.color = 'white'}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a 
                href="#" 
                className="text-light text-decoration-none fs-5 transition-all"
                style={{transition: 'all 0.3s ease'}}
                onMouseOver={(e) => e.target.style.color = '#1da1f2'}
                onMouseOut={(e) => e.target.style.color = 'white'}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="#" 
                className="text-light text-decoration-none fs-5 transition-all"
                style={{transition: 'all 0.3s ease'}}
                onMouseOver={(e) => e.target.style.color = '#0077b5'}
                onMouseOut={(e) => e.target.style.color = 'white'}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="#" 
                className="text-light text-decoration-none fs-5 transition-all"
                style={{transition: 'all 0.3s ease'}}
                onMouseOver={(e) => e.target.style.color = '#e4405f'}
                onMouseOut={(e) => e.target.style.color = 'white'}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                className="text-light text-decoration-none fs-5 transition-all"
                style={{transition: 'all 0.3s ease'}}
                onMouseOver={(e) => e.target.style.color = '#ff0000'}
                onMouseOut={(e) => e.target.style.color = 'white'}
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer