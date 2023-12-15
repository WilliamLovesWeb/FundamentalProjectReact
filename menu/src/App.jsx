import { useState } from 'react'
import './App.css'
import Menu from './Menu/Menu'
import menu from './assets/data'

function App() {
  const [listMenu,setListMenu] = useState(menu);

  const all = () => {
    setListMenu(menu);
  }

  const breakfast = () => {
    const newList = menu.filter((food)=> food.category === 'breakfast');
    setListMenu(newList);
  }

  const lunch = () => {
    const newList = menu.filter((food)=> food.category === 'lunch');
    setListMenu(newList);
  }

  const shakes = () => {
    const newList = menu.filter((food)=> food.category === 'shakes');
    setListMenu(newList);
  }

  return (
    <div className='App'>
      <div className='title'>Our Menu</div>
      <div className='border'></div>
      <div className='search'>
        <button className='All' onClick={all}>All</button>
        <button className='Breakfast' onClick={breakfast}>Breakfast</button>
        <button className='Lunch' onClick={lunch}>Lunch</button>
        <button className='Shakes' onClick={shakes}>Shakes</button>
      </div>
      <div className="ListMenu">
        {listMenu.map((food)=>{
          return <Menu {...food} key={food.id} />
        })}
      </div>
    </div>
  )
}

export default App
