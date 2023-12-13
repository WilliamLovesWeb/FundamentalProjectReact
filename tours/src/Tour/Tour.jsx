// Tour.js
import { useState } from 'react';
import './Tour.css';

const Tour = ({ index, changeRow, name, info, image, price }) => {
  const [componentHeight, setComponentHeight] = useState(300);

  const changeComponentHeight = () => {
    // Change the height to your desired values
    setComponentHeight(componentHeight===300? 500 : 300)
    changeRow(index);
  };


  return (
    <div className='Tour'>
      <div className='high'>
        <img src={image} alt='Image' />
        <div className='price'>${price}</div>
      </div>
      <div className='bottom' style={{ height: `${componentHeight}px` }}>
        <div className='title'>{name}</div>
        <div className='info'>
          {componentHeight===500? info : info.slice(0, 200) + '...'}
          <span id='read' onClick={changeComponentHeight}>
            {componentHeight===500? 'Read Less' : 'Read More'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tour;
