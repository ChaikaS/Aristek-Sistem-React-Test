import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./todoList.scss";

export default function TodoList() {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div className="main__list-items">
      {todoList.map((item) => (
        <TodoItem text={item.text} key={item.id.uuid} item={item} />
      ))}
    </div>
  );
}
