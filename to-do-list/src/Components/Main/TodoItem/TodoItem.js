import "./todoItem.scss";
import contentEditIcon from "../../../image/edit-icon.png";
import contentDeleteIcon from "../../../image/delete-icon.png";
import { useDispatch } from "react-redux";
import { deletedTodoItem, postItemToCompletedList, deletedTodoItemCompletedList, updateInputText } from "../../../store/actions/actionsTodo.js";

export default function TodoItem({ item, text }) {
  const editIcon = <img src={contentEditIcon} alt="edit icon" />;
  const deleteIcon = <img src={contentDeleteIcon} alt="delete icon" />;
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deletedTodoItem(item.id.uuid));
    dispatch(deletedTodoItemCompletedList(item.id.uuid));
  };
  const completedTodoHandler = () => {
    dispatch(postItemToCompletedList(item.id.uuid, item, item.completed, item.edit));
  };
  const editTodoHandler = () => {
    dispatch(updateInputText(item.text, item.id.uuid, item.edit));
  };
  const checkedHandler = () => {
    return true;
  };
  return (
    <div className="todo__item">
      <input onClick={completedTodoHandler} onChange={checkedHandler} type="checkbox" checked={`${item.completed ? "checked" : ""}`} className="todo__checkbox " />
      <label className={`todo__text ${item.completed ? "completed" : ""}`}>{text}</label>
      <div onClick={editTodoHandler} className="todo__edit-icon" className={`todo__edit-icon ${item.completed ? "display-none" : ""}`}>
        {editIcon}
      </div>
      <div onClick={deleteHandler} className="todo__delete-icon">
        {deleteIcon}
      </div>
    </div>
  );
}
