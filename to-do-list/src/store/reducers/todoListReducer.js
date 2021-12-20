import { ADD_ITEM, COMPLETED_ITEM, SAVE_UPDATE_INPUT_TEXT, DELETED_ITEM, POST_ITEM_TO_TODO_LIST } from "../actions/actionsTodo";

const initialState = {
  todoTasks: [],
};

export default function todoTasks(state = initialState.todoTasks, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const { text, completed, id, edit } = action.payload;
      return [...state, { text, completed, id, edit }];
    }
    case COMPLETED_ITEM: {
      return [...state.map((el) => (el.id.uuid === action.payload.id ? { ...el, completed: !el.completed } : el))];
    }
    case DELETED_ITEM: {
      const newState = [...state];
      const remove = newState.filter((el) => el.id.uuid !== action.payload.id);
      return remove;
    }
    case POST_ITEM_TO_TODO_LIST: {
      const newState = [...state];
      newState.push(action.payload.item);
      return newState;
    }
    case SAVE_UPDATE_INPUT_TEXT: {
      const { text, id } = action.payload;
      return [...state.map((el) => (el.id.uuid === id ? { ...el, text: text } : el))];
    }
    default:
      return state;
  }
}
