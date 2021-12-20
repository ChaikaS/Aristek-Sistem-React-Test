import "./main.scss";
import contentImageBar from "../../image/image-bar.png";
import InputForm from "../Main/InputForm/InputForm.js";
import CompletedList from "../CompletedList/CompletedList.js";
import React, { useCallback, useState } from "react";
import TodoList from "./TodoList/TodoList.js";
import { useDispatch, useStore } from "react-redux";

export default function Main({ store }) {
  const [todoTasks, setTodoTasks] = useState([]);
  const [todoCompletedTasks, setTodoCompletedTasks] = useState([]);
  // const [todoCurrent, setTodoCurrent] = useState([]);
  const imageBar = <img src={contentImageBar} alt={"icon bar"} />;
  // const deleteHandler = () => {
  //   setTodoTasks(todoTasks.filter((el) => el.id.uuid !== item.id.uuid));
  // };
  // const changeStatusHandler = (field) => {
  //   setTodoTasks(
  //     todoTasks.map((el) => {
  //       if (el.id.uuid === item.id.uuid) {
  //         return {
  //           ...el,
  //           [field]: !item[field],
  //         };
  //       }
  //       return el;
  //     })
  //   );
  // };

  return (
    <div className="main__conteiner">
      <div className="main__bar">{imageBar}</div>
      <div className="main__todo-list">
        <InputForm todoTasks={todoTasks} setTodoTasks={setTodoTasks} />
        <div className="main__total-count">Total: {todoTasks.length + todoCompletedTasks.length}</div>
        <div className="main__added-count">To do ({todoTasks.length})</div>
        <TodoList />
      </div>
      <div className="complited-list">
        <div>Completed ({todoCompletedTasks.length})</div>
        <CompletedList todoCompletedTasks={todoCompletedTasks} setTodoCompletedTasks={setTodoCompletedTasks} store={store} />
      </div>
    </div>
  );
}
