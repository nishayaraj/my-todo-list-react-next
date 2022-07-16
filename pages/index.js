import { useState } from "react";
import ToDo from './toDo';

const index = () => {
  const [listItem, setListItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();

    setListItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodoList([...todoList, listItem]);
  };

  return (
    <div>
      <h1>TO-DO List</h1>
      <form>
        <input type="text" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Add to list
        </button>
      </form>
      <ToDo todoList={todoList} />
    </div>
  );
};

export default index;
