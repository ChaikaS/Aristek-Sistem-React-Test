import "./inputForm.scss";

export default function InputForm({ inputText, setInputText, todoTasks, setTodoTasks, uuid }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitToDoHandler = (e) => {
    e.preventDefault();
    setTodoTasks([...todoTasks, { text: inputText, complited: false, id: { uuid } }]);
    setInputText("");
  };
  return (
    <div className="main__input-todo">
      <input value={inputText} onChange={inputTextHandler} type="text" placeholder="+ Add a task, press Enter to save" />
      <button type="submit" onClick={submitToDoHandler}>
        Add
      </button>
    </div>
  );
}
