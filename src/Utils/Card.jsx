import React from 'react'
import studybanner from "../assets/images/studybannerlogo1.png"
import image1 from"../assets/images/studybannerlogo2.png"
import image2 from "../assets/images/sl4.png"

function Card() {
  return (
    <>
      <div className='col-12 col-lg-12 mx-auto d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 gap-md-4'>
    
        <div className="card py-4 p-2  border-0 w-100 w-md-auto" style={{maxWidth: "700px", height: "250px"}}>
          <div className="d-flex justify-content-center p-3">
            <img src={studybanner} className='w-25' alt="Study Banner Logo" />
          </div>
          <div className='card-body'>
            <h5 className='text-center card-title'>Best Industry Leaders</h5>
          </div>
        </div>

       
        <div className="card py-4 border-start border-end p-2 border-0  w-100 w-md-auto" style={{maxWidth: "400px", height: "200px"}}>
          <div className="d-flex justify-content-center p-3">
            <img src={image1} className='w-25' alt="Study Banner Logo" />
          </div>
          <div className='card-body'>
            <h5 className='text-center card-title'>Learn Courses Online</h5>
          </div>
        </div>

      
        <div className="card py-4 p-2 border-0  w-100 w-md-auto" style={{maxWidth: "700px", height: "250px"}}>
          <div className="d-flex justify-content-center p-3">
            <img src={image1} className='w-25' alt="Study Banner Logo" />
          </div>
          <div className='card-body'>
            <h5 className='text-center card-title'>Book Library & Store</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card