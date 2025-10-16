import React from 'react'
import banner from '../assets/images/banner (1).jpg'

function Banner() {
  return (
    <>
      <div className="banner-section" style={{ marginTop: '76px' }}>
        <div className="container-fluid p-0 position-relative">
          <div className="row g-0">
            <div className="col-12 position-relative">
              <img 
                src={banner} 
                className="d-block w-100" 
                alt="Banner"
                style={{
                  height: '85vh',
                  minHeight: '400px',
                  objectFit: 'cover'
                }}
              />
              
            
              <div 
                className="position-absolute top-0 start-0 w-100 d-flex justify-content-center align-items-center" 
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  height: '85vh',
                  minHeight: '400px'
                }}
              >
                <div className="text-center px-3 px-md-4 px-lg-5">
                  <h1 className="text-white display-4 display-lg-3 fw-bold mb-2 mb-md-3">
                    One Place For B-Learning
                  </h1>
                  <p className="text-white fs-5 fs-md-4 mb-3 mb-md-4">
                    Ever Grow Is The Best Platform To Learn Online.
                  </p>
                  <button className="btn btn-primary px-4 px-md-5 py-2 py-md-3 fw-bold fs-6 fs-md-5">
                    Get Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner