import './Person.css'

const Person = ({name,job,text,image}) => {
    function capitalizeWords(str) {
        // Split the string into an array of words
        let words = str.split(' ');
    
        // Capitalize the first letter of each word
        let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    
        // Join the words back into a string
        let result = capitalizedWords.join(' ');
    
        return result;
    }
  return (
    <div className="Person">
        <img src={image} alt={name + ' photo'} />
        <div className="name">{capitalizeWords(name)}</div>
        <div className="job">{job.toUpperCase()}</div>
        <div className="text">{text}</div>
    </div>
  )
}
export default Person