import { useState } from 'react'
import { birthdays } from './assets/data'
import './App.css'
import Birthday from './Birthday/Birthday';

function App() {
  const [arraybirthdays,setArrayBirthday] = useState(birthdays);
  const [componentHeight, setComponentHeight] = useState(575);

  const clearBirthdays = () => {
    setArrayBirthday([])
    setComponentHeight(125);
  }

  return (
    <div className='App'>
      <div className='component' style={{ height: `${componentHeight}px` }}>
        <div className='title'>{arraybirthdays.length} Birthdays Today</div>
        <div className='list'>
          {arraybirthdays.map((birthday)=>{
            return <Birthday {...birthday} key={birthday.id} />
          })}
          
        </div>
        <button className='button' onClick={clearBirthdays}>Clear All</button>
      </div>
    </div>
  )
}

export default App
