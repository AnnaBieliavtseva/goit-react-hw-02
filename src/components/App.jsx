// import { useState } from 'react'
import './App.css'
import './Description'
import Description from './Description'
import Options from './Options'
import Feedback from './Feedback'

function App() {
  // const [feedback, setFeedback] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  return (
    <>
      
    
      <Description />
      <Options />
      <Feedback/>
      
    </>
  )
}

export default App
