import "./todoItem.scss";
import contentEditIcon from "../../../image/edit-icon.png";
import contentDeleteIcon from "../../../image/delete-icon.png";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { deletedTodoItem, completedTodoItem, updateTodoItem, postItemToCompletedList, deletedTodoItemCompletedList, updateInputText } from "../../../store/actions/actionsTodo.js";
import { completedTodoItemCompletedList } from "../../../store/actions/completedList.js";
import thunk from "redux-thunk";

export default function TodoItem({ item, text }) {
  const editIcon = <img src={contentEditIcon} alt="edit icon" />;
  const deleteIcon = <img src={contentDeleteIcon} alt="delete icon" />;
  // const deleteHandler = () => {
  //   setTodoTasks(todoTasks.filter((el) => el.id.uuid !== item.id.uuid));
  // };
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deletedTodoItem(item.id.uuid));
    dispatch(deletedTodoItemCompletedList(item.id.uuid));
  };
  // const completedTodoHandler = () => {
  //   dispatch(completedTodoItem(item.id.uuid));
  //   // dispatch(thunk)
  // };
  const completedTodoHandler = () => {
    // dispatch(completedTodoItem(item.id.uuid));
    // dispatch(deletedTodoItem(item.id.uuid));
    dispatch(postItemToCompletedList(item.id.uuid, item, item.completed, item.edit));
  };
  const editTodoHandler = () => {
    dispatch(updateInputText(item.text, item.id.uuid, item.edit));
  };
  console.log(useStore().getState());

  // const deleteHandler = useCallback(
  //   (id) => {
  //     console.log("в колбеке", id);

  //     return () => {
  //       return dispatch(deletedTodoItem(id));
  //     };
  //   },
  //   [dispatch]
  // );

  // const deleteHandler = useCallback(
  //   (id) => {
  //     console.log(id);

  //     return () => {
  //       return dispatch(deletedTodoItem(id));
  //     };
  //   },
  //   [dispatch]
  // );

  // const changeStatusHandler = (field) => {
  //   setTodoTasks(
  //     todoTasks.map((el) => {
  //       if (el.id.uuid === item.id.uuid) {
  //         return {
  //           ...el,
  //           [field]: !item[field],
  //         };
  //       }
  //       return el;
  //     })
  //   );
  // };
  // const changeStatusHandler = (field) => {
  //   setTodoTasks(
  //     todoTasks.map((el) => {
  //       if (el.id.uuid === item.id.uuid) {
  //         return {
  //           ...el,
  //           [field]: !item[field],
  //         };
  //       }
  //       return el;
  //     })
  //   );
  // };

  return (
    <div className="todo__item">
      <input
        onClick={completedTodoHandler}
        // onClick={() => {
        //   changeStatusHandler("completed");
        // }}
        type="checkbox"
        checked={`${item.completed ? "checked" : ""}`}
        className="todo__checkbox "
      />
      <label className={`todo__text ${item.completed ? "completed" : ""}`}>{text}</label>
      <div
        onClick={editTodoHandler}
        // onClick={() => {
        //   changeStatusHandler("edit");
        // }}
        className="todo__edit-icon"
        className={`todo__edit-icon ${item.completed ? "display-none" : ""}`}
      >
        {editIcon}
      </div>
      <div onClick={deleteHandler} className="todo__delete-icon">
        {deleteIcon}
      </div>
    </div>
  );
}
