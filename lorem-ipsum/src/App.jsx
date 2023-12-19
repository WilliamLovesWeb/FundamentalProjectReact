import { useState } from 'react'
import text from './assets/data'
import './App.css'
import Paragraph from './Paragraph/Paragraph';

function App() {
  const [paragraphs,setParagraphs] = useState([text[0]])
  const [selectedValue, setSelectedValue] = useState(1);

  const handleIncrement = (e) => {
    e.preventDefault();
    setSelectedValue((prevValue) => Math.min(prevValue + 1, 9)); // Ensure the value doesn't go above 10
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    setSelectedValue((prevValue) => Math.max(prevValue - 1, 1)); // Ensure the value doesn't go below 1
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setParagraphs(text.slice(0,selectedValue));
  }

  return (
      <div className='App'>
        <div className='title'>TIRED OF BORING LOREM IPSUM?</div>
        <form className="generator" onSubmit={handleSubmit}>
          <label>Paragraphs:</label>
          <div className='display'>
            <div className="number">{selectedValue}</div>
            <button onClick={handleIncrement} className='buttonIncrement'>
            ^
            </button>
            <button onClick={handleDecrement} className='buttonDecrement'>
              v
            </button>
          </div>
          <button type='submit' className='submit'>Generate</button>
        </form>
        <div className='Paragraphs'>
          {paragraphs.map((paragraph)=>{
            return <Paragraph text={paragraph} key={paragraph} />
          })}
        </div>
      </div>
  )
}

export default App
