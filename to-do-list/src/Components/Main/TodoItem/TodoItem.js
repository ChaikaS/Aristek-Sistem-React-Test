import "./todoItem.scss";
import contentEditIcon from "../../../Image/edit-icon.png";
import contentDeleteIcon from "../../../Image/delete-icon.png";
import React, { useEffect } from "react";

export default function TodoItem({ item, text, todoTasks, setTodoTasks, todoCompletedTasks }) {
  const editIcon = <img src={contentEditIcon} alt="edit icon" />;
  const deleteIcon = <img src={contentDeleteIcon} alt="delete icon" />;
  const deleteHandler = () => {
    setTodoTasks(todoTasks.filter((el) => el.id.uuid !== item.id.uuid));
  };
  const completeHandler = () => {
    setTodoTasks(
      todoTasks.map((el) => {
        if (el.id.uuid === item.id.uuid) {
          return {
            ...el,
            completed: !item.completed,
          };
        }

        return el;
      })
    );
  };
  const editHandler = () => {
    setTodoTasks(
      todoTasks.map((el) => {
        if (el.id.uuid === item.id.uuid) {
          return {
            ...el,
            edit: !item.edit,
          };
        }
        return el;
      })
    );
  };
  useEffect(() => {
    if (item.completed === true) {
      console.log("true");
      todoCompletedTasks.push(item);
      setTodoTasks(todoTasks.filter((el) => el.id.uuid !== item.id.uuid));
    }
  }, [todoTasks]);

  return (
    <div className="todo__item">
      <input onClick={completeHandler} type="checkbox" className="todo__checkbox " />
      <label className={`todo__text ${item.completed ? "completed" : ""}`}>{text}</label>
      {/* <label className={`todo__text `}>{text}</label> */}
      <div onClick={editHandler} className="todo__edit-icon">
        {editIcon}
      </div>
      <div onClick={deleteHandler} className="todo__delete-icon">
        {deleteIcon}
      </div>
    </div>
  );
}
