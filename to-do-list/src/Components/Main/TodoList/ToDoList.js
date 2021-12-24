import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { getTodoList } from "../../../store/middleware/middlewareTodo";
import { useEffect } from "react";

export default function TodoList() {
  const todoList = useSelector((state) => state.todoList.flat());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <div className="main__list-items">
      {todoList.map((item) => (
        <TodoItem title={item.title} key={item.id} item={item} />
      ))}
    </div>
  );
}
