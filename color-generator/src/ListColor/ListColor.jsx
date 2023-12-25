import { useState } from 'react';
import './ListColor.css'
import Item from '../Item/Item';

const ListColor = ({darkColors,lightColors}) => {
    return (
        <div className='ListColor'>
            {lightColors.map((c, index) => (
                <Item key={index} color={c.color} percentage={c.percentage} tint='light' />
            ))}
            {darkColors.map((c, index) => (
                <Item key={index} color={c.color} percentage={c.percentage} tint='dark'/>
            ))}

        </div>
    )
}
export default ListColor