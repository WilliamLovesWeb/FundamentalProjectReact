import SingleItem from "../SingleItem/SingleItem";
import './List.css';

const List = ({ clickRemoveItem, list }) => {
  return (
    <div className="List">
      {list.map((item) => (
        <SingleItem
          clickRemoveItem={clickRemoveItem}
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default List;

