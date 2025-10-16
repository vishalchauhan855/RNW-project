import {data} from '../assets/Data'
import React from 'react'

function TopCourses({name}) {
  return (
    <div className="container-fluid bg-light py-5    col-10">
  
      <div className="row">
        <div className="col-12">
          <h1 className='text-center py-3 py-md-4 py-lg-5 display-4 display-md-3 display-lg-2'>
          {name}
          </h1>
        </div>
      </div>

    
      <div className="row justify-content-center g-4">
        {data.map(course => (
          <div key={course.title} className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
             
              <img 
                src={course.image} 
                className="card-img-top" 
                alt={course.title}
                style={{height: '200px', objectFit: 'cover'}}
              />
              
              <div className="card-body text-center p-4 d-flex flex-column">
                
                <div className="mb-3" style={{fontSize: '3rem'}}>
                  {course.icon}
                </div>
                
             
                <h5 className="card-title">{course.title}</h5>
                
             
                <p className="card-text text-muted flex-grow-1">{course.description}</p>
                
                
                <div className="mt-auto">
                  <span className="  fs-4">Rs. {course.Fee}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopCourses