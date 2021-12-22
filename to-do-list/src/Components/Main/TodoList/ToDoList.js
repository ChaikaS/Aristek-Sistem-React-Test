import { useSelector, useDispatch, useStore } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { getTodoList } from "../../../store/middleware/middlewareTodo";
import { useEffect } from "react";
import { postToCompletedList, completedTodoItemCompletedList, deletedTodoItem, deletedTodoItemCompletedList, postToTodoList, completedTodoItem, receiveTodoListDataErrorFalse, receiveTodoListDataErrorTrue } from "../../../store/actions/actionsTodo.js";

export default function TodoList() {
  // const { todoListData, isError, isLoading, errorMessage } = useSelector((state) => state.todoListData);
  const todoList = useSelector((state) => state.todoList.flat());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, []);
  return (
    <>
      {/* {isLoading && <div style={{ color: "red" }}>Data loading...</div>}
      {isError && <div style={{ color: "red" }}>Error loading data: {errorMessage}</div>}
      {!isLoading && !isError && ( */}
      <div className="main__list-items">
        {todoList.map((item) => (
          // <TodoItem title={item.title} key={item.id.uuid} item={item} />
          <TodoItem title={item.title} key={item.id} item={item} />
        ))}
      </div>
      {/* )}  */}
    </>

    // <div className="main__list-items">
    //   {todoList.map((item) => (
    //     <TodoItem title={item.title} key={item.id.uuid} item={item} />
    //   ))}
    // </div>
  );
}
