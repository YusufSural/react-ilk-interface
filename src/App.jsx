import { useState } from 'react'
import './index.css'
import Header from "./header.jsx";
import {courses} from "./data.jsx";
import Course from "./course.jsx";
import './Css/course.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
        <div className='course-main'>
             {
            courses?.map((course)=>(
                <Course key={course.id} course={course}/>
            ))
        }
        </div>

    </div>
  )
}

export default App
