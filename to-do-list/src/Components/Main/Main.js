import "./main.scss";
import contentImageBar from "../../Image/image-bar.png";
import InputForm from "../Main/InputForm/InputForm.js";
import ComplitedList from "../ComplitedList.js/ComplitedList";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList/TodoList.js";

export default function Main() {
  const imageBar = <img src={contentImageBar} alt={""} />;
  const countComplited = 0;
  const [inputText, setInputText] = useState("");
  const [todoTasks, setTodoTasks] = useState([]);
  const uuid = uuidv4();

  return (
    <div className="main__conteiner">
      <div className="main__bar">{imageBar}</div>
      <div className="main__todo-list">
        <InputForm inputText={inputText} setInputText={setInputText} todoTasks={todoTasks} setTodoTasks={setTodoTasks} uuid={uuid} />
        <div className="main__total-count">Total: {todoTasks.length}</div>
        <div className="main__added-count">To do ({todoTasks.length})</div>
        <TodoList todoTasks={todoTasks} setTodoTasks={setTodoTasks} />
      </div>
      <div className="complited-list">
        <div>Complited ({countComplited})</div>
        <ComplitedList />
      </div>
    </div>
  );
}
