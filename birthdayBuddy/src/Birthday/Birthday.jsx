import './Birthday.css'

const Birthday = ({image,firstName,lastName,age}) => {
  return (
    <div className='Birthday'>
        <img src={image} className='photo' alt={'photo'} />
        <div className='name'>{firstName} {lastName}</div>
        <div className='age'>{age} years</div>
    </div>
  )
}
export default Birthday