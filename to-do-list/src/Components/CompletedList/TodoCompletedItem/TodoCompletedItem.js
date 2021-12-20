// import "./todoCompletedItem.scss";
// import contentEditIcon from "../../../image/edit-icon.png";
// import contentDeleteIcon from "../../../image/delete-icon.png";
// import React, { useEffect } from "react";
// export default function TodoCompletedItem({ item, text, todoTasks, setTodoTasks, todoCompletedTasks }) {
//   const editIcon = <img src={contentEditIcon} alt="edit icon" />;
//   const deleteIcon = <img src={contentDeleteIcon} alt="delete icon" />;
//   const deleteHandler = () => {
//     setTodoTasks(todoTasks.filter((el) => el.id.uuid !== item.id.uuid));
//   };
//   const completeHandler = () => {
//     setTodoTasks(
//       todoTasks.map((el) => {
//         if (el.id.uuid === item.id.uuid) {
//           return {
//             ...el,
//             completed: !item.completed,
//           };
//         }
//         return el;
//       })
//     );
//   };
//   return (
//     <div className="todo__item">
//       {/* <input onClick={completeHandler} type="checkbox" className="todo__checkbox " />
//       <label className={`todo__text ${item.completed ? "completed" : ""}`}>{text}</label>
//       <div className="todo__edit-icon">{editIcon}</div>
//       <div onClick={deleteHandler} className="todo__delete-icon">
//         {deleteIcon}
//       </div> */}
//     </div>
//   );
// }
