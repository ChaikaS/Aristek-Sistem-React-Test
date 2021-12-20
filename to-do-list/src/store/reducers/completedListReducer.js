import { COMPLETED_ITEM_COMPLETED_LIST, DELETED_ITEM_COMPLETED_LIST, POST_ITEM_TO_COMPLETED_LIST } from "../actions/actionsTodo.js";

const initialState = {
  todoCompletedTasks: [],
};

export default function todoCompletedTasks(state = initialState.todoCompletedTasks, action) {
  console.log(action);

  switch (action.type) {
    case COMPLETED_ITEM_COMPLETED_LIST: {
      return [...state.map((el) => (el.id.uuid === action.payload.id ? { ...el, completed: !el.completed } : el))];
    }
    case POST_ITEM_TO_COMPLETED_LIST: {
      const newState = [...state];
      newState.push(action.payload.item);
      return newState;

      // return newState.map((el) => (el.id.uuid === action.payload.id ? { ...el, completed: !el.completed } : el));
      // return newState;
    }
    case DELETED_ITEM_COMPLETED_LIST: {
      const newState = [...state];
      const remove = newState.filter(({ id }) => id.uuid !== action.payload.id);
      return remove;
    }
    // case POST_ITEM_TO_COMPLETED_LIST: {
    // }
    default:
      return state;
  }
}
// return [...state.map((el) => (el.id.uuid === action.payload.id ? { ...el, completed: !el.completed } : el))];
