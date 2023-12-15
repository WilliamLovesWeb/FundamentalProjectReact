import './Menu.css'
const Menu = ({title,category,price,img,desc}) => {
  function capitalizeFirstLetterEachWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words back into a string
    const result = capitalizedWords.join(' ');

    return result;
  }
  return (
    <div className='menu'>
        <img src={img} alt={title +' '+ category} />
        <div className="title">{capitalizeFirstLetterEachWord(title)}</div>
        <div className="price">${price}</div>
        <div className="historic">{desc}</div>
    </div>
  )
}
export default Menu