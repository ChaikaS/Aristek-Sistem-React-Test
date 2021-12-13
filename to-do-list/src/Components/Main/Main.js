import "./main.scss";
import contentImageBar from "../../Image/image-bar.png";
import ToDoList from "../Main/TodoList/ToDoList.js";
import InputForm from "../Main/InputForm/InputForm.js";
import ComplitedList from "../ComplitedList.js/ComplitedList";
import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";

export default function Main() {
  const imageBar = <img src={contentImageBar} alt={"image bar"} />;
  const countComplited = 0;
  const countTotal = 0;
  const countTotalAddedTasks = 0;
  const [inputText, setInputText] = useState("");
  const [todoTasks, setTodoTasks] = useState([]);
  return (
    <div className="main__conteiner">
      <div className="main__bar">{imageBar}</div>
      <div className="main__todo-list">
        <InputForm inputText={inputText} setInputText={setInputText} todoTasks={todoTasks} setTodoTasks={setTodoTasks} uuid={uuid} />
        <div className="main__total-count">Total: {countTotal}</div>
        <div className="main__added-count">To do ({countTotalAddedTasks})</div>
        <ToDoList inputText={inputText} />
      </div>
      <div className="complited-list">
        <div>Complited ({countComplited})</div>
        <ComplitedList />
      </div>
    </div>
  );
}
