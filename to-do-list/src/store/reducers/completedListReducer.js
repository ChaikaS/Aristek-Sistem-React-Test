import { COMPLETED_ITEM_COMPLETED_LIST, DELETED_ITEM_COMPLETED_LIST, POST_ITEM_TO_COMPLETED_LIST, RECEIVE_COMPLETED_TODO_LIST_DATA_ERROR_FALSE } from "../actions/actionsTodo.js";

const initialState = {
  todoCompletedTasks: [],
};

export default function todoCompletedTasks(state = initialState.todoCompletedTasks, action) {
  console.log(action);

  switch (action.type) {
    case COMPLETED_ITEM_COMPLETED_LIST: {
      return [...state.map((el) => (el.id === action.payload.id ? { ...el, completed: !el.completed } : el))];
    }
    case POST_ITEM_TO_COMPLETED_LIST: {
      const newState = [...state];
      newState.push(action.payload.item);
      return newState;
    }
    case DELETED_ITEM_COMPLETED_LIST: {
      const newState = [...state];
      const remove = newState.filter(({ id }) => id !== action.payload.id);
      return remove;
    }
    case RECEIVE_COMPLETED_TODO_LIST_DATA_ERROR_FALSE: {
      const arrTodoTasks = action.payload.todoTasks;
      const newState = [...state];
      arrTodoTasks.map((item) => {
        if (item.completed === true) {
          newState.push(item);
        }
      });
      return newState;
    }
    default:
      return state;
  }
}
