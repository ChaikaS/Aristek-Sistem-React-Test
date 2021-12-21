import { useSelector } from "react-redux";
import TodoItem from "../Main/TodoItem/TodoItem";
import "../Main/TodoItem/todoItem.scss";

export default function CompletedList() {
  const completedList = useSelector((state) => state.completedList);

  return (
    <div className="main__list-items">
      {completedList.map((item) => (
        <TodoItem title={item.title} key={item.id.uuid} item={item} />
      ))}
    </div>
  );
}
