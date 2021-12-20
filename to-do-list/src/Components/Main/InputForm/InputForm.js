import "./inputForm.scss";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { createdTodoItem, updateInputText, saveUpdateInputText, nullUpdateInputText } from "../../../store/actions/actionsTodo.js";
import { v4 as uuidv4 } from "uuid";
import inputForm from "../../../store/reducers/inputFormReducer";

export default function InputForm({ todoTasks, setTodoTasks }) {
  const inputForm = useSelector((state) => state.inputForm);

  console.log(inputForm);
  console.log(inputForm?.text);
  console.log(inputForm?.id);

  const [inputText, setInputText] = useState("");
  const uuid = uuidv4();
  // const [updateText, setUpdateText] = useState({});

  // const [updateText, setUpdateText] = useState({});
  // console.log(updateText);

  // const [todoEditing, setTodoEditing] = useState(false);
  // const [todoCurrent, setTodoCurrent] = useState({});

  const dispatch = useDispatch();

  // const todoList = useSelector((state) => state.todoList);
  // console.log(todoList);

  const addItemHandler = () => {
    dispatch(createdTodoItem(inputText, { uuid }));
    setInputText("");
  };

  const inputTextHandler = (e) => {
    // dispatch(updateTodoItem());
    setInputText(e.target.value);
    // setUpdateText(inputForm?.text);
    // dispatch(updateTodoItems(inputText));
  };
  const editInputTextHandler = (e) => {
    // inputForm.map((el) => {
    //   setUpdateText({ ...updateText, text: el.text, id: el.id });
    // });
    // setUpdateText({ ...updateText, text: e.target.value });
    dispatch(updateInputText(e.target.value, inputForm?.id));
    // setUpdateText({ ...updateText, text: e.target.value });
    // dispatch(updateTodoItems(inputText));
  };
  // setTodoCurrent({ ...todoCurrent, text: e.target.value });
  const saveInputTextHandler = () => {
    dispatch(saveUpdateInputText(inputForm?.text, inputForm?.id));
    // setInputText("");
    // inputForm.text = "";
    dispatch(nullUpdateInputText(inputForm));
  }; // const saveInfoHandler = () => {
  //   updateTodoHandler(todoCurrent);
  //   setTodoCurrent({ ...todoCurrent });
  //   setTodoEditing(false);
  // };
  // const updateTodoHandler = (updatedTodo) => {
  //   const updateItem = todoTasks.map((el) => {
  //     if (el.id.uuid === updatedTodo.id) {
  //       return {
  //         ...el,
  //         text: updatedTodo.text,
  //         edit: !updatedTodo.edit,
  //       };
  //     }
  //     return el;
  //   });
  //   setTodoTasks(updateItem);
  // };
  console.log(useStore().getState());

  // const stores = useStore();
  // console.log(todosExample, stores.getState().todoList);
  // const addItemHandler = useCallback(
  //   (e) => {
  //     // e.preventDefault();
  //     dispatch(createdTodoItem(inputText, uuid));
  //     setInputText("");
  //   },
  //   [dispatch, inputText]
  // );

  // const submitToDoHandler = (e) => {
  //   e.preventDefault();
  //   setTodoTasks([...todoTasks, { text: inputText, completed: false, id: { uuid }, edit: false }]);
  //   setInputText("");
  // };
  // const editInputHandler = (e) => {
  //   setTodoCurrent({ ...todoCurrent, text: e.target.value });
  // };
  // const saveInfoHandler = () => {
  //   updateTodoHandler(todoCurrent);
  //   setTodoCurrent({ ...todoCurrent });
  //   setTodoEditing(false);
  // };
  // const updateTodoHandler = (updatedTodo) => {
  //   const updateItem = todoTasks.map((el) => {
  //     if (el.id.uuid === updatedTodo.id) {
  //       return {
  //         ...el,
  //         text: updatedTodo.text,
  //         edit: !updatedTodo.edit,
  //       };
  //     }
  //     return el;
  //   });
  //   setTodoTasks(updateItem);
  // };

  // useEffect(() => {
  //   todoTasks.map((el) => {
  //     if (el.edit === true) {
  //       setTodoEditing(true);
  //       setTodoCurrent({ ...todoCurrent, text: el.text, id: el.id.uuid, edit: el.edit });
  //     }
  //   });
  // }, [todoTasks]);

  return (
    <div className="main__input-todo">
      {inputForm === null ? (
        <>
          <input value={inputText} onChange={inputTextHandler} type="text" placeholder="+ Add a task, press Enter to save" />
          <button type="submit" onClick={addItemHandler}>
            Add
          </button>
        </>
      ) : (
        <>
          <input value={inputForm?.text} type="text" onChange={editInputTextHandler} />
          <button type="submit" onClick={saveInputTextHandler}>
            Save
          </button>
        </>
      )}
    </div>
  );
  //     { inputForm === null (<div className="main__input-todo">
  //     <input value={inputForm} onChange={inputTextHandler} type="text" placeholder="+ Add a task, press Enter to save" />
  //     <button type="submit" onClick={addItemHandler}>
  //       Add
  //     </button>
  //   </div>) : (<div className="main__input-todo">
  //   <input value={inputForm} onChange={inputTextHandler} type="text" placeholder="+ Add a task, press Enter to save" />
  //   <button type="submit" onClick={addItemHandler}>
  //     Save
  //   </button>
  // </div>)}

  //     <div className="main__input-todo">
  //       {inputForm === null ? (
  //         <>
  //           <input value={todoCurrent.text} type="text" onChange={editInputHandler} />
  //           <button type="submit" onClick={saveInfoHandler}>
  //             Save
  //           </button>
  //         </>
  //       ) : (
  //         <>
  //           <input value={inputText} onChange={inputTextHandler} type="text" placeholder="+ Add a task, press Enter to save" />
  //           <button type="submit" onClick={addItemHandler}>
  //             Add
  //           </button>
  //         </>
  //       )}
  //     </div>
}
