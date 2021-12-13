import "./todoItem.scss";
import contentEditIcon from "../../../Image/edit-icon.png";
import contentDeleteIcon from "../../../Image/delete-icon.png";

export default function TodoItem({ item, text, todoTasks, setTodoTasks }) {
  const editIcon = <img src={contentEditIcon} alt="edit icon" />;
  const deleteIcon = <img src={contentDeleteIcon} alt="delete icon" />;
  console.log(item.id.uuid);

  const deletehandler = () => {
    setTodoTasks(todoTasks.filter((el) => el.id.uuid !== item.id.uuid));
  };

  return (
    <div className="todo__item">
      <input type="checkbox" className="todo__checkbox" />
      <label className="todo__text"> {text}</label>
      <div className="todo__edit-icon">{editIcon}</div>
      <div onClick={deletehandler} className="todo__delete-icon">
        {deleteIcon}
      </div>
    </div>
  );
}
