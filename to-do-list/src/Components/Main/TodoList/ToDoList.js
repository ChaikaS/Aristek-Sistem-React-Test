import TodoItem from "../TodoItem/TodoItem";
import "./todoList.scss";

export default function TodoList({ todoTasks }) {
  return (
    <div className="main__list-items">
      {todoTasks.map((item) => (
        <TodoItem text={item.text} key={item.id.uuid} />
      ))}
    </div>
  );
}
