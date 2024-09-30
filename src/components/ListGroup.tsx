import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San  francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;
  // event handler
  
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
