import { useState } from 'react';
import './App.css'
import ListColor from './ListColor/ListColor';
import chroma from 'chroma-js';

function App() {
  const [selectedColor, setSelectedColor] = useState('#000000'); 
  const [lightColors, setLightColors] = useState([]);
  const [darkColors, setDarkColors] = useState([]);

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const colorObj = chroma(selectedColor);
    setDarkColors([{ color : selectedColor , percentage : 0 }]);
    setLightColors([]);
    let lightColorArray = [];
    let darkColorArray = [];
  
    for (let i = 1; i < 11; i++) {
      
      const lighterColor = { color: chroma.mix('white', colorObj , (i * 0.1)+0.1).hex(), percentage: 110 - i * 10 };
      lightColorArray.push(lighterColor);
  
      const darkerColor = { color: chroma.mix('black', colorObj , (1.1 - (i * 0.1))+0.1).hex() , percentage: i * 10 };
      darkColorArray.push(darkerColor);
    }
  
    setLightColors((prevLightColors) => [...prevLightColors, ...lightColorArray]);
    setDarkColors((prevDarkColors) => [...prevDarkColors, ...darkColorArray]);
  };
  

  return (
    <div className='App'>    
      <form onSubmit={handleSubmit}>
        <label htmlFor='colorPicker'>Color Generator</label>
        <input
          type="color"
          id="colorPicker"
          value={selectedColor}
          onChange={handleColorChange}
        />
        <input 
          type='text'
          id="colorText"
          value={selectedColor}
          onChange={handleColorChange}
        />
        <button type='submit' className='submit'>Submit</button>
      </form>
      <ListColor darkColors={darkColors} lightColors={lightColors} />
    </div>
  );
}

export default App
