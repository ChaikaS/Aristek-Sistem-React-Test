import TodoItem from "../TodoItem/TodoItem";
import "./todoList.scss";

export default function TodoList({ todoTasks, setTodoTasks, todoCompletedTasks, setTodoCompletedTasks }) {
  return (
    <div className="main__list-items">
      {todoTasks.map((item) => (
        <TodoItem text={item.text} key={item.id.uuid} todoTasks={todoTasks} setTodoTasks={setTodoTasks} item={item} todoCompletedTasks={todoCompletedTasks} setTodoCompletedTasks={setTodoCompletedTasks} />
      ))}
    </div>
  );
}
