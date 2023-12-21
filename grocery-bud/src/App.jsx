import { useState } from 'react'
import './App.css'
import List from './List/List';
import shop from './assets/data';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

function App() {
  const [valueAdded,setValueAdded] = useState('');
  const [list,setList] = useState(shop);

  const removeItem = (id) => {
    const newList = list.filter((item)=> item.id !== id);
    setList(newList);
  }
 
  const addItem = (product) => {
    const newObject = { id: nanoid(), item: product , checked: false}; 
    const newList = [...list,newObject];
    setList(newList);
  }

  const clickAddItem = () =>{
    addItem(valueAdded);
    setValueAdded('')
    toast.success('Item Added', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const clickRemoveItem = (item) => {
    if(item.checked){
      removeItem(item.id);
      toast.success('Item Removed', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

  return (
    <div className='App'>
      <div className="title">Grocery Bud</div>
      <div className="search">
        <input 
          type='text' 
          className='searchBar' 
          value={valueAdded} 
          onChange={(e)=>setValueAdded(e.target.value)} />
        <button className='buttonAddItem' onClick={clickAddItem}>Add Item</button>
      </div>
      <List clickRemoveItem={clickRemoveItem} list={list} />
      <ToastContainer />
    </div>
  )
}

export default App
