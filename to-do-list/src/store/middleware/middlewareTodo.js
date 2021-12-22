import axios from "axios";
import { postToCompletedList, completedTodoItemCompletedList, deletedTodoItem, deletedTodoItemCompletedList, postToTodoList, completedTodoItem, receiveTodoListDataErrorFalse, receiveTodoListDataErrorTrue, receiveCompletedTodoListDataErrorFalse, createdTodoItem } from "../actions/actionsTodo.js";
import { requestTodoList } from "../actions/actionsApi.js";

export const postItemToCompletedList = (completed, id, item) => {
  return (dispatch) => {
    if (completed === false) {
      dispatch(postToCompletedList(item));
      dispatch(completedTodoItemCompletedList(id));
      // dispatch(deletedTodoItem(id));
    } else {
      // dispatch(deletedTodoItemCompletedList(id));
      dispatch(postToTodoList(item));
      dispatch(completedTodoItem(id));
    }
  };
};
export const getTodoList = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  return async (dispatch) => {
    dispatch(requestTodoList());
    try {
      const json = await axios.get(url);
      dispatch(receiveTodoListDataErrorFalse(json));
      dispatch(receiveCompletedTodoListDataErrorFalse(json));
    } catch (e) {
      dispatch(receiveTodoListDataErrorTrue(e));
    }
  };
};
export const postTodoItem = (text, id) => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  return async (dispatch) => {
    const json = await axios.post(url);
    dispatch(createdTodoItem(text, id, json));
  };
};
export const deleteTodoItem = (completed, id) => {
  // const url = "https://jsonplaceholder.typicode.com/todos";
  // return async (dispatch) => {
  //   const json = await axios.delete(url);
  //   if (completed === false) {
  //     dispatch(deletedTodoItem(id, json));
  //   } else {
  //     dispatch(deletedTodoItemCompletedList(id, json));
  //   }
  // };
  return (dispatch) => {
    if (completed === false) {
      dispatch(deletedTodoItem(id));
    } else {
      dispatch(deletedTodoItemCompletedList(id));
    }
  };
};
