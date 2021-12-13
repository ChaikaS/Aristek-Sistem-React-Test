import "./todoItem.scss";
import contentEditIcon from "../../../Image/edit-icon.png";
import contentDeleteIcon from "../../../Image/delete-icon.png";

export default function TodoItem({ text }) {
  const editIcon = <img src={contentEditIcon} alt="edit icon" />;
  const deleteIcon = <img src={contentDeleteIcon} alt="delete icon" />;

  return (
    <div className="todo__item">
      <input type="checkbox" className="todo__checkbox" />
      <label className="todo__text"> {text}</label>
      <div className="todo__edit-icon">{editIcon}</div>
      <div className="todo__delete-icon">{deleteIcon}</div>
    </div>
  );
}
