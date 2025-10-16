import React from 'react'
import { data2 } from '../assets/Data'

function PopularTopics() {
  return (
    <div className="popular-topics" style={{backgroundColor: "#183154", minHeight: "100vh", padding: "80px 0"}}>
      <div className="container">
        <h3 className="text-center text-light fw-normal mb-5" 
            style={{fontSize: "clamp(2rem, 4vw, 3.5rem)"}}>
          Popular Topics To Learn
        </h3>
        
        <div className="row justify-content-center g-4">
          {data2.map((ele, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card topic-card h-100 shadow-lg border-0">
                <div className="card-body text-center d-flex align-items-center justify-content-center p-4">
                  <h5 className="card-title mb-0 fw-bold text-dark">
                    {ele.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}

          <div className=' text-center'><button className='btn  btn-warning p-3 text-light fw-bold   fs-5'>Browse More Category</button></div>
        </div>
      </div>
    </div>
  )
}

export default PopularTopics