import { useState } from 'react'
import './App.css'
import reviews from './assets/data'
import Person from './Person/Person'

function App() {
  const [index,setIndex] = useState(0)

  const plus = () => {
    if(index===3){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
  }

  const less = () => {
    if(index === 0 ){
      setIndex(3);
    }
    else{
      setIndex(index-1);
    }
  }

  const random = () => {
    let number;
    do{
      number = Math.floor(Math.random() * 4) + 0;
    }
    while(number===index)
    setIndex(number);
  }

  return <div className='App'>
    <div className='frame'>
      <Person {...reviews[index]} key={reviews[index].id} />
      <div className='change'>
        <span id="less" onClick={less}>&lt;</span>
        <span id="more" onClick={plus}>&gt;</span>
      </div>
      <button className='random' onClick={random}>Surprise Me</button>
    </div>
  </div>
}

export default App
