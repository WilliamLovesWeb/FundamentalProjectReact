import { useState } from 'react'
import Tour from './Tour/Tour';
import './App.css'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [list,setList] = useState([]);
  const [rowSize, setRowSize] = useState('700px');

  fetch(url)
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON data in the response
    return response.json();
  })
  .then(data => {
    // Do something with the data
    setList(data);
  })
  .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  });

  const changeRow = (id) =>{
    if((id === list[0].id)||(id === list[1].id)||(id===list[2].id)){
      //setRowSize('900px')
    }
  }

  return <div className='App'>
    <div className='title'>Our Tours</div>
    <div className='border'></div>
    <div className='tours' style={{ gridTemplateRows: rowSize }}>
      {list.map((tour, index) => (
          <Tour
            key={index}
            index={index}
            changeRow={changeRow}
            {...tour}
          />
        ))}
    </div>
  </div>
}

export default App
