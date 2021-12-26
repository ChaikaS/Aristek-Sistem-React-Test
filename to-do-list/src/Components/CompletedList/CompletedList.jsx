import { useSelector } from "react-redux";
import TodoItem from "../Main/TodoItem/TodoItem.jsx";
import "../Main/TodoItem/todoItem.scss";

export default function CompletedList() {
  const completedList = useSelector((state) => state.completedList.flat());

  return (
    <div>
      {completedList.map((item) => (
        <TodoItem title={item.title} key={item.id} item={item} />
      ))}
    </div>
  );
}
