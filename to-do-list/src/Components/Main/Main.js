import "./main.scss";
import contentImageBar from "../../Image/image-bar.png";
import InputForm from "../Main/InputForm/InputForm.js";
import CompletedList from "../CompletedList.js/CompletedList";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList/TodoList.js";

export default function Main() {
  const imageBar = <img src={contentImageBar} alt={"icon bar"} />;
  const [inputText, setInputText] = useState("");
  const [todoTasks, setTodoTasks] = useState([]);
  const [todoCompletedTasks, setTodoCompletedTasks] = useState([]);
  // const [todoCurrent, setTodoCurrent] = useState([]);
  const uuid = uuidv4();

  return (
    <div className="main__conteiner">
      <div className="main__bar">{imageBar}</div>
      <div className="main__todo-list">
        <InputForm inputText={inputText} setInputText={setInputText} todoTasks={todoTasks} setTodoTasks={setTodoTasks} uuid={uuid} />
        <div className="main__total-count">Total: {todoTasks.length + todoCompletedTasks.length}</div>
        <div className="main__added-count">To do ({todoTasks.length})</div>
        <TodoList todoTasks={todoTasks} setTodoTasks={setTodoTasks} todoCompletedTasks={todoCompletedTasks} setTodoCompletedTasks={setTodoCompletedTasks} />
      </div>
      <div className="complited-list">
        <div>Completed ({todoCompletedTasks.length})</div>
        <CompletedList todoCompletedTasks={todoCompletedTasks} setTodoCompletedTasks={setTodoCompletedTasks} />
      </div>
    </div>
  );
}
