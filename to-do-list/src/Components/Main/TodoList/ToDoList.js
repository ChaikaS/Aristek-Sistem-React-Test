import { useSelector, useDispatch, useStore } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { requestTodoList } from "../../../store/middleware/middlewareApi.js";
import { useEffect } from "react";

export default function TodoList() {
  // const { todoListData, isError, isLoading, errorMessage } = useSelector((state) => state.todoListData);
  const { todoListData, isError, isLoading, errorMessage } = useSelector((state) => state.todoList);
  const url = "https://jsonplaceholder.typicode.com/todos";
  const dispatch = useDispatch();

  dispatch(requestTodoList(url));

  // useEffect(() => {
  //   dispatch(requestTodoList(url));
  // }, [dispatch]);
  console.log(todoListData);
  console.log(useStore().getState());

  return (
    <>
      {isLoading && <div style={{ color: "red" }}>Data loading...</div>}
      {isError && <div style={{ color: "red" }}>Error loading data: {errorMessage}</div>}
      {!isLoading && !isError && (
        <div className="main__list-items">
          {todoListData.map((item) => (
            <TodoItem title={item.title} key={item.id.uuid} item={item} />
          ))}
        </div>
      )}
    </>

    // <div className="main__list-items">
    //   {todoList.map((item) => (
    //     <TodoItem title={item.title} key={item.id.uuid} item={item} />
    //   ))}
    // </div>
  );
}
