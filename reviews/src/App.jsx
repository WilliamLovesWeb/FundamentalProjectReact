import { useState } from 'react'
import './App.css'
import reviews from './assets/data'
import Person from './Person/Person'

function App() {
  return <div className='App'>
    <div className='frame'>
      <Person {...reviews[0]} id={reviews[0].id} />
    </div>
  </div>
}

export default App
