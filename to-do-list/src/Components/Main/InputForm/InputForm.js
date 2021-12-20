import "./inputForm.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createdTodoItem, updateInputText, saveUpdateInputText, nullUpdateInputText } from "../../../store/actions/actionsTodo.js";
import { v4 as uuidv4 } from "uuid";

export default function InputForm() {
  const inputForm = useSelector((state) => state.inputForm);
  const [inputText, setInputText] = useState("");
  const [inputDirty, setInputDirty] = useState(false);
  const [inputError, setInputError] = useState("Please, enter text");
  const uuid = uuidv4();
  const dispatch = useDispatch();

  const addItemHandler = () => {
    if (inputText === "") {
      console.log("null");
      setInputDirty(true);
    } else {
      setInputDirty(false);
      dispatch(createdTodoItem(inputText, { uuid }));
      setInputText("");
    }
  };
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const editInputTextHandler = (e) => {
    dispatch(updateInputText(e.target.value, inputForm?.id));
  };
  const saveInputTextHandler = () => {
    dispatch(saveUpdateInputText(inputForm?.text, inputForm?.id));
    dispatch(nullUpdateInputText(inputForm));
    setInputDirty(false);
  };
  console.log(inputDirty);

  return (
    <div className="main__input-todo">
      {inputForm === null ? (
        <>
          {inputDirty ? <div style={{ color: "red" }}> {inputError}</div> : ""}
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
}
