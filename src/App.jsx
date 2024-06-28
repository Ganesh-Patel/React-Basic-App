import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-container'>
        <div className='title'>
          <h1>Learn Web Developement</h1>
        </div>
        <div className="div1-with-text">
          <p>Welcome to the MDN learning area. This set of articles aims to provide complete<br></br> beginners to web development with fundamental skills for coding websites</p>
        </div>
        <div className="div2-with-text">
          <p>The aim is not to take you from "beginner" to "expert" but to<br></br> take you from "beginner" to "comfortable." From there, you should be able to start<br></br> making your way, learning from <a href='https://developer.mozilla.org/en-US/'>the rest of MDN</a>, and other intermediate to<br></br> advanced resources that assume a lot of previous knowledge.

          </p>
        </div>
        <div className="div3-with-text">
          <p>If you are a complete beginner, web development can be challenging — we will hold<br></br> your hand and provide enough detail for you to feel comfortable and learn the topics<br></br> properly. You should feel at home whether you are a student learning web<br></br> development (on your own or as part of a class), a teacher looking for class<br></br> materials, a hobbyist, or someone who just wants to understand more about how<br></br> web technologies work.</p>
        </div>

      </div>
    </>
  )
}

export default App
