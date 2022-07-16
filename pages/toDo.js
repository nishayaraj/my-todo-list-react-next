import React from "react";

const ToDo = ({ todoList }) => (
  <ul>
    {todoList.length >= 1
      ? todoList.map((todo, index) => <li key={index}>{todo}</li>)
      : "Enter an item"}
  </ul>
);

export default ToDo;
