import { postToCompletedList, completedTodoItemCompletedList, deletedTodoItem, deletedTodoItemCompletedList, postToTodoList, completedTodoItem } from "../actions/actionsTodo.js";

export const postItemToCompletedList = (id, item, completed) => {
  return (dispatch) => {
    if (completed === false) {
      dispatch(postToCompletedList(item));
      dispatch(completedTodoItemCompletedList(id));
      dispatch(deletedTodoItem(id));
    } else {
      dispatch(deletedTodoItemCompletedList(id));
      dispatch(postToTodoList(item));
      dispatch(completedTodoItem(id));
    }
  };
};
