export const ADD_ITEM = "ADD_ITEM";
export const COMPLETED_ITEM = "COMPLETE_ITEM";
export const COMPLETED_ITEM_COMPLETED_LIST = "COMPLETED_ITEM_COMPLETED_LIST";
export const DELETED_ITEM = "DELETED_ITEM";
export const DELETED_ITEM_COMPLETED_LIST = "DELETED_ITEM_COMPLETED_LIST";
export const POST_ITEM_TO_TODO_LIST = "POST_ITEM_TO_TODO_LIST";
export const POST_ITEM_TO_COMPLETED_LIST = "POST_ITEM_TO_COMPLETED_LIST";
export const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT";
export const UPDATE_INPUT_TEXT = "UPDATE_INPUT_TEXT";
export const SAVE_UPDATE_INPUT_TEXT = "SAVE_UPDATE_INPUT_TEXT";
export const NULL_UPDATE_INPUT_TEXT = "NULL_UPDATE_INPUT_TEXT";
export const REQUEST_TODO_LIST_DATA = "REQUEST_TODO_LIST_DATA";
export const RECEIVE_TODO_LIST_DATA = "RECEIVE_TODO_LIST_DATA";
export const RECEIVE_COMPLETED_TODO_LIST_DATA = "RECEIVE_COMPLETED_TODO_LIST_DATA";

function createdTodoItem(title, id) {
  return {
    type: ADD_ITEM,
    payload: { title: title, completed: false, id: id, edit: false },
  };
}
function changeCompletedTodoItem(id) {
  return {
    type: COMPLETED_ITEM,
    payload: {
      id,
    },
  };
}
function changeCompletedTodoItemCompletedList(id) {
  return {
    type: COMPLETED_ITEM_COMPLETED_LIST,
    payload: {
      id,
    },
  };
}
function deletedTodoItem(id) {
  return {
    type: DELETED_ITEM,
    payload: {
      id,
    },
  };
}
function deletedTodoItemCompletedList(id) {
  return {
    type: DELETED_ITEM_COMPLETED_LIST,
    payload: {
      id,
    },
  };
}
function postToCompletedList(item) {
  return {
    type: POST_ITEM_TO_COMPLETED_LIST,
    payload: {
      item,
    },
  };
}
function postToTodoList(item) {
  return {
    type: POST_ITEM_TO_TODO_LIST,
    payload: {
      item,
    },
  };
}
function updateInputText(title, id) {
  return {
    type: UPDATE_INPUT_TEXT,
    payload: {
      title,
      id,
    },
  };
}
function saveUpdateInputText(title, id) {
  return {
    type: SAVE_UPDATE_INPUT_TEXT,
    payload: {
      title,
      id,
    },
  };
}
function nullUpdateInputText(object) {
  return {
    type: NULL_UPDATE_INPUT_TEXT,
    payload: { object },
  };
}
function receiveTodoListData(json) {
  return {
    type: "RECEIVE_TODO_LIST_DATA",
    payload: {
      todoTasks: json,
    },
  };
}
function receiveCompletedTodoListData(json) {
  return {
    type: "RECEIVE_COMPLETED_TODO_LIST_DATA",
    payload: {
      todoTasks: json,
    },
  };
}

export const postItemToCompletedList = (completed, id, item) => (dispatch) => {
  if (completed === false) {
    dispatch(postToCompletedList(item));
    dispatch(changeCompletedTodoItemCompletedList(id));
    dispatch(deletedTodoItem(id));
  } else {
    dispatch(deletedTodoItemCompletedList(id));
    dispatch(postToTodoList(item));

    dispatch(changeCompletedTodoItem(id));
  }
};
export const getTodoList = () => async (dispatch) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    dispatch(receiveTodoListData(json));
    dispatch(receiveCompletedTodoListData(json));
  } catch (e) {
    console.error(e);
  }
};
export const postTodoItem = (text, id) => async (dispatch) => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: text,
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    dispatch(createdTodoItem(text, id));
  } catch (e) {
    console.error(e);
  }
};
export const editTodoItem = (text, id) => async (dispatch) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: text,
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    dispatch(updateInputText(text, id));
  } catch (e) {
    console.error(e);
  }
};
export const deleteTodoItem = (completed, id) => async (dispatch) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (completed === false) {
      dispatch(deletedTodoItem(id));
    } else {
      dispatch(deletedTodoItemCompletedList(id));
    }
  } catch (e) {
    console.error(e);
  }
};

export { createdTodoItem, deletedTodoItem, postToCompletedList, deletedTodoItemCompletedList, postToTodoList, updateInputText, saveUpdateInputText, nullUpdateInputText, receiveTodoListData, receiveCompletedTodoListData };
