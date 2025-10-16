import React from 'react'
import { data3 } from '../assets/Data'

function Blogs() {
  return (
    <div className="container my-5 py-4">
      <h2 className="text-center mb-5 fw-bold">Happy Students</h2>
      
      <div className="row g-4">
        {data3.map((testimonial, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card testimonial-card h-100 border-0 shadow-sm">
            
              <div className="student-image-container text-center pt-4">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.title}
                    className="student-img rounded-circle" style={{height:"100px",width:'100px'}}
                  />
                ) : (
                  <div className="student-placeholder rounded-circle mx-auto">
                    <span className="placeholder-text">
                      {testimonial.title.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="card-body p-4 d-flex flex-column">
     
                <div className=" mb-2 text-center" style={{fontSize: '1.5rem'}}>
                  {testimonial.title}
                </div>
                
         
                <p className="card-text testimonial-text text-muted flex-grow-1 mb-3">
                  {testimonial.blog}
                </p>
                
          
                <div className="text-center mt-auto">
                
                  <small className="text-muted">Student</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs