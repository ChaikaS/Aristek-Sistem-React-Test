import TodoCompletedItem from "./TodoCompletedItem/TodoCompletedItem";
import TodoItem from "../Main/TodoItem/TodoItem";
import React, { useState, useEffect } from "react";
import "../Main/TodoItem/todoItem.scss";

export default function CompletedList({ todoCompletedTasks, setTodoCompletedTasks }) {
  console.log(todoCompletedTasks);
  // const [todoCompleting, setTodoCompleting] = useState(false);

  return (
    <div className="todo-complited__conteiner">
      {/* {todoCompletedTasks.map((item) => (
        <TodoCompletedItem key={item.id.uuid} text={item.text} />
      ))} */}
      {todoCompletedTasks.map((item) => (
        <TodoItem text={item.text} key={item.id.uuid} item={item} todoCompletedTasks={todoCompletedTasks} setTodoCompletedTasks={setTodoCompletedTasks} />
      ))}
    </div>
  );
}
