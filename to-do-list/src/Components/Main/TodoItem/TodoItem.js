import "./todoItem.scss";
import contentEditIcon from "../../../image/edit-icon.png";
import contentDeleteIcon from "../../../image/delete-icon.png";
import { useDispatch } from "react-redux";
import { deletedTodoItem, deletedTodoItemCompletedList, updateInputText } from "../../../store/actions/actionsTodo.js";
import { postItemToCompletedList, deleteTodoItem } from "../../../store/middleware/middlewareTodo.js";
import { useEffect } from "react";
import { apiTodoList } from "../../../store/middleware/middlewareTodo";

export default function TodoItem({ item, title }) {
  const editIcon = <img src={contentEditIcon} alt="edit icon" />;
  const deleteIcon = <img src={contentDeleteIcon} alt="delete icon" />;
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTodoItem(item.completed, item.id));
  };
  const completedTodoHandler = () => {
    console.log(item.completed, item.id, item);

    dispatch(postItemToCompletedList(item.completed, item.id, item));
  };
  const editTodoHandler = () => {
    dispatch(updateInputText(item.title, item.id));
  };
  const checkedHandler = () => {
    return "";
  };
  // useEffect(() => {
  //   dispatch(apiTodoList(item.completed, item.id, item));
  // }, []);

  return (
    <div className="todo__item">
      <input onClick={completedTodoHandler} onChange={checkedHandler} type="checkbox" checked={`${item.completed ? "checked" : ""}`} className="todo__checkbox " />
      <label className={`todo__text ${item.completed ? "completed" : ""}`}>{title}</label>
      <div onClick={editTodoHandler} className={`todo__edit-icon ${item.completed ? "display-none" : ""}`}>
        {editIcon}
      </div>
      <div onClick={deleteHandler} className="todo__delete-icon">
        {deleteIcon}
      </div>
    </div>
  );
}
