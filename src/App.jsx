import React from 'react'
import Home from "./Pages/Home"
import Banner from './Layouts/Banner'
import Studay from '../src/Layouts/Studay'
import Card from './Utils/Card'
import TopCourses from './Layouts/TopCourses'
import Footer from './Layouts/Footer'
import PopularTopics from './Layouts/PopularTopics'
import Blogs from './Layouts/Blogs'
function App() {
  return (
 <>
 <Home/>
 <Banner/>
<Studay/>
<Card/>
<TopCourses name=" Our Top Courses"/>
<PopularTopics/>
<TopCourses name="Pick A Course To Get Started"/>
<Blogs/>
<Footer/>
 </>
  )
}

export default App
