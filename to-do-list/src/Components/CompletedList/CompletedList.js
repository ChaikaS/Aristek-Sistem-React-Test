// import TodoCompletedItem from "./TodoCompletedItem/TodoCompletedItem.js";
// import TodoItem from "../Main/TodoItem/TodoItem";
// import React, { useState, useEffect } from "react";
// import "../Main/TodoItem/todoItem.scss";

// export default function CompletedList({ todoCompletedTasks, setTodoCompletedTasks }) {
//   // const [todoCompleting, setTodoCompleting] = useState(false);

//   return (
//     <div className="todo-complited__conteiner">
//       {/* {todoCompletedTasks.map((item) => (
//         <TodoCompletedItem key={item.id.uuid} text={item.text} />
//       ))} */}
//       {todoCompletedTasks.map((item) => (
//         <TodoItem text={item.text} key={item.id.uuid} item={item} todoCompletedTasks={todoCompletedTasks} setTodoCompletedTasks={setTodoCompletedTasks} />
//       ))}
//     </div>
//   );
// }

// export default function TodoList({ todoTasks, setTodoTasks, todoCompletedTasks, setTodoCompletedTasks, store }) {
//   const todoList = useSelector((state) => state.todoList);

//   return (
//     <div className="main__list-items">
//       {todoList.map((item) => (
//         <TodoItem text={item.text} key={item.id.uuid} todoTasks={todoTasks} setTodoTasks={setTodoTasks} item={item} todoCompletedTasks={todoCompletedTasks} setTodoCompletedTasks={setTodoCompletedTasks} store={store} />
//       ))}
//     </div>
//   );
// }

import { useSelector } from "react-redux";
import TodoItem from "../Main/TodoItem/TodoItem";
import "../Main/TodoItem/todoItem.scss";

export default function CompletedList() {
  const completedList = useSelector((state) => state.completedList);

  return (
    <div className="main__list-items">
      {completedList.map((item) => (
        <TodoItem text={item.text} key={item.id.uuid} item={item} />
      ))}
    </div>
  );
}
