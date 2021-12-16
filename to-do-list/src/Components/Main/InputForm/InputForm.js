import "./inputForm.scss";
import React, { useState, useEffect } from "react";

export default function InputForm({ inputText, setInputText, todoTasks, setTodoTasks, uuid }) {
  const [todoEditing, setTodoEditing] = useState(false);
  const [todoCurrent, setTodoCurrent] = useState({});
  console.log(todoCurrent);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitToDoHandler = (e) => {
    e.preventDefault();
    setTodoTasks([...todoTasks, { text: inputText, completed: false, id: { uuid }, edit: false }]);
    setInputText("");
  };
  const changeEditHandler = useEffect(
    (e) => {
      todoTasks.map((el) => {
        if (el.edit === true) {
          setTodoEditing(true);
          setTodoCurrent({ ...todoCurrent, text: el.text, id: el.id.uuid, edit: el.edit });
        }
      });
    },
    [todoTasks]
  );
  const editInputHandler = (e) => {
    setTodoCurrent({ ...todoCurrent, text: e.target.value });
  };
  const saveInfoHandler = () => {
    updateTodoHandler(todoCurrent);
    setTodoCurrent({ ...todoCurrent });
    setTodoEditing(false);
  };
  const updateTodoHandler = (updatedTodo) => {
    const updateItem = todoTasks.map((el) => {
      if (el.id.uuid === updatedTodo.id) {
        return {
          ...el,
          text: updatedTodo.text,
          edit: !updatedTodo.edit,
        };
      }
      return el;
    });
    setTodoTasks(updateItem);
  };

  return (
    <div className="main__input-todo" onChange={changeEditHandler}>
      {todoEditing ? (
        <>
          <input value={todoCurrent.text} type="text" onChange={editInputHandler} />
          <button type="submit" onClick={saveInfoHandler}>
            Save
          </button>
        </>
      ) : (
        <>
          <input value={inputText} onChange={inputTextHandler} type="text" placeholder="+ Add a task, press Enter to save" />
          <button type="submit" onClick={submitToDoHandler}>
            Add
          </button>
        </>
      )}
    </div>
  );
}
