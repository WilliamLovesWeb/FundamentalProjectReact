import './Question.css'
import { useState } from 'react'

export const Question = ({title,info}) => {
  const [expand,setExpand] = useState(false);

  const frame2Height = expand ? '127.4px' : '63.7px';

  const questionHeight = expand ? '150.15px' : '91px';

  return (
    <div className='question' style={{ height: questionHeight }}>
        <div className='frame2' style={{ height: frame2Height }}>
            <div className='title2'>{title}</div>
            <button className='button' onClick={()=>setExpand(!expand)}>
                {expand ? '-' : '+' }
            </button>
            {expand && <div className='info'>{info}</div>}            
        </div>

    </div>
  )
}