import './Menu.css'
const Menu = ({title,category,price,img,desc}) => {
  return (
    <div className='menu'>
        <img src={img} alt={title +' '+ category} />
        <div className="title">{title}</div>
        <div className="price">{price}</div>
        <div className="historic">{desc}</div>
    </div>
  )
}
export default Menu