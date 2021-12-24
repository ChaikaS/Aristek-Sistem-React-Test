import { ADD_ITEM, COMPLETED_ITEM, SAVE_UPDATE_INPUT_TEXT, DELETED_ITEM, POST_ITEM_TO_TODO_LIST, RECEIVE_TODO_LIST_DATA } from "../actions/actionsTodo";

export const initialState = {
  todoTasks: [],
};

export default function todoTasks(state = initialState.todoTasks, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const { completed, id, title } = action.payload;
      return [...state, { completed, id, title }];
    }
    case COMPLETED_ITEM: {
      return [...state.map((el) => (el.id === action.payload.id ? { ...el, completed: !el.completed } : el))];
    }
    case DELETED_ITEM: {
      const newState = [...state];
      const remove = newState.filter((el) => el.id !== action.payload.id);
      return remove;
    }
    case POST_ITEM_TO_TODO_LIST: {
      const newState = [...state];
      newState.push(action.payload.item);
      return newState;
    }
    case SAVE_UPDATE_INPUT_TEXT: {
      const { id, title } = action.payload;
      return [...state.map((el) => (el.id === id ? { ...el, title: title } : el))];
    }
    case RECEIVE_TODO_LIST_DATA: {
      const arrTodoTasks = action.payload.todoTasks;
      const newState = [...state];
      arrTodoTasks.map((item) => {
        if (item.completed === false) {
          newState.push(item);
        }
      });
      return newState;
    }
    default:
      return state;
  }
}
