import { useState } from 'react';
import './SingleItem.css';

const SingleItem = ({ clickRemoveItem, item }) => {
  const [checked,setChecked] = useState(item.checked);

  const changeChecked = () =>{
    setChecked(!checked)
    item.checked = !checked;
    console.log(item.checked)
  }

  return (
    <div className="SingleItem">
      <input
        type="checkbox"
        id="myCheckbox"
        name="myCheckbox"
        checked={checked}
        onChange={changeChecked}
      />
      <span
        id='item'
        style={{ textDecoration: item.checked ? 'line-through' : 'none' }}
      >
        {item.item}
      </span>
      <button
        className='removeButton'
        onClick={() => clickRemoveItem(item)}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
