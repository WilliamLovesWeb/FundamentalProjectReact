import './Item.css'

const Item = ({color,percentage,tint}) => {
  return (
    <div className='Item' style={{backgroundColor : color , color : tint === 'light' ? 'black' : 'white'}}>
        <div className="percentage">{percentage}%</div>
        <div className="color">{color}</div>
    </div>
  )
}
export default Item