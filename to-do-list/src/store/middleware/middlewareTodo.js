import { postToCompletedList, completedTodoItemCompletedList, deletedTodoItem, deletedTodoItemCompletedList, postToTodoList, completedTodoItem, receiveTodoListData, receiveCompletedTodoListData, createdTodoItem, updateInputText } from "../actions/actionsTodo.js";

export const postItemToCompletedList = (completed, id, item) => {
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
export const getTodoList = () => {
  return async (dispatch) => {
    try {
      const json = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => json);
      dispatch(receiveTodoListData(json));
      dispatch(receiveCompletedTodoListData(json));
    } catch (e) {
      console.error(e);
    }
  };
};
export const postTodoItem = (text, id) => {
  return async (dispatch) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          title: { text },
          id: { id },
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => json);
      dispatch(createdTodoItem(text, id));
    } catch (e) {
      console.error(e);
    }
  };
};
export const editTodoItem = (text, id) => {
  return async (dispatch) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: { text },
          id: { id },
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => json);
      dispatch(updateInputText(text, id));
    } catch (e) {
      console.error(e);
    }
  };
};
export const deleteTodoItem = (completed, id) => {
  return async (dispatch) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
        body: JSON.stringify({
          id: { id },
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => json);
      if (completed === false) {
        dispatch(deletedTodoItem(id));
      } else {
        dispatch(deletedTodoItemCompletedList(id));
      }
    } catch (e) {
      console.error(e);
    }
  };
};
