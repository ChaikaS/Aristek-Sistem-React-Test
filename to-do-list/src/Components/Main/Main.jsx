import "./main.scss";
import contentImageBar from "../../assets/image/image-bar.png";
import InputForm from "./InputForm/InputForm.jsx";
import CompletedList from "../CompletedList/CompletedList.jsx";
import TodoList from "./TodoList/TodoList.jsx";
import { useSelector } from "react-redux";

export default function Main() {
  const completedList = useSelector((state) => state.completedList.flat());
  const todoList = useSelector((state) => state.todoList.flat());

  return (
    <div className="main__conteiner">
      <div className="main__bar">{<img src={contentImageBar} alt="icon bar" />}</div>
      <div className="main__conteiner-todo-list">
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
    </div>
  );
}
