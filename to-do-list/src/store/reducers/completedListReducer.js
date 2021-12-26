import { COMPLETED_ITEM_COMPLETED_LIST, DELETED_ITEM_COMPLETED_LIST, POST_ITEM_TO_COMPLETED_LIST, RECEIVE_COMPLETED_TODO_LIST_DATA } from "../actions/actionsTodo.js";

const initialState = {
  todoCompletedTasks: [],
};

export default function todoCompletedTasks(state = initialState.todoCompletedTasks, action) {
  switch (action.type) {
    case COMPLETED_ITEM_COMPLETED_LIST: {
      return [...state.map((el) => (el.id === action.payload.id ? { ...el, completed: !el.completed } : el))];
    }
    case POST_ITEM_TO_COMPLETED_LIST: {
      const newState = [...state];
      newState.unshift(action.payload.item);
      return newState;
    }
    case DELETED_ITEM_COMPLETED_LIST: {
      const newState = [...state];
      const remove = newState.filter(({ id }) => id !== action.payload.id);
      return remove;
    }
    case RECEIVE_COMPLETED_TODO_LIST_DATA: {
      const newState = [...state];
      action.payload.todoTasks.map((item) => {
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
