import "./main.scss";
import contentImageBar from "../../image/image-bar.png";
import InputForm from "../Main/InputForm/InputForm.js";
import CompletedList from "../CompletedList/CompletedList.js";
import TodoList from "./TodoList/TodoList.js";
import { useSelector } from "react-redux";

export default function Main() {
  const imageBar = <img src={contentImageBar} alt={"icon bar"} />;
  const completedList = useSelector((state) => state.completedList.flat());
  const todoList = useSelector((state) => state.todoList.flat());

  return (
    <div className="main__conteiner">
      <div className="main__bar">{imageBar}</div>
      <div className="main__todo-list">
        <InputForm />
        <div className="main__total-count">Total: {todoList.length + completedList.length}</div>
        <div className="main__added-count">To do ({todoList.length})</div>
        <TodoList />
      </div>
      <div className="complited-list">
        <div>Completed ({completedList.length})</div>
        <CompletedList />
      </div>
    </div>
  );
}
