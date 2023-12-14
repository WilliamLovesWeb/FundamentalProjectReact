import { useState } from 'react'
import './App.css'
import Menu from './Menu/Menu'
import menu from './assets/data'

function App() {

  return (
    <div className='App'>
      <div className='title'>Our Menu</div>
      <div className='border'></div>
      <div className='search'>
        <button className='All'>All</button>
        <button className='Breakfast'>Breakfast</button>
        <button className='Lunch'>Lunch</button>
        <button className='Shakes'>Shakes</button>
      </div>
      <div className="ListMenu">
        <Menu {...menu[0]} key={menu[0].id} />
      </div>
    </div>
  )
}

export default App
