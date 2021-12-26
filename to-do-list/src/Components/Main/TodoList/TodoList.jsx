import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { getTodoList } from "../../../store/actions/actionsTodo.js";
import { useEffect } from "react";

export default function TodoList() {
  const todoList = useSelector((state) => state.todoList.flat());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <div>
      {todoList.map((item) => (
        <TodoItem title={item.title} key={item.id} item={item} />
      ))}
    </div>
  );
}
