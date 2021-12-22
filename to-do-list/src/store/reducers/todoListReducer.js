import { ADD_ITEM, COMPLETED_ITEM, SAVE_UPDATE_INPUT_TEXT, DELETED_ITEM, POST_ITEM_TO_TODO_LIST, REQUEST_TODO_LIST_DATA, RECEIVE_TODO_LIST_DATA_ERROR_FALSE, RECEIVE_TODO_LIST_DATA_ERROR_TRUE } from "../actions/actionsTodo";

export const initialState = {
  todoTasks: [],
  // isLoading: true,
  // isError: false,
  // errorMsg: "",
};

export default function todoTasks(state = initialState.todoTasks, action) {
  console.log(action);
  console.log(action.payload);
  console.log(state);

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
    // case REQUEST_TODO_LIST_DATA: {
    //   const { isLoading, isError } = action.payload;
    //   return { ...state, isLoading: isLoading, isError: isError };
    // }
    case RECEIVE_TODO_LIST_DATA_ERROR_FALSE: {
      const arrTodoTasks = action.payload.todoTasks;
      const newState = [...state];
      arrTodoTasks.map((item) => {
        if (item.completed === false) {
          newState.push(item);
        }
      });
      return newState;
    }
    case RECEIVE_TODO_LIST_DATA_ERROR_TRUE: {
      const { todoTasks, isError, errorMessage } = action.payload;
      return [...state, { todoTasks: todoTasks, isError: isError, errorMessage: errorMessage }];
    }
    default:
      return state;
  }
}

// import { REQUEST_TODO_LIST_DATA, RECEIVE_TODO_LIST_DATA_ERROR_FALSE, RECEIVE_TODO_LIST_DATA_ERROR_TRUE } from "../actions/actionsApi.js";

// const initialState = {
//   todoListData: [],
//   isLoading: true,
//   isError: false,
// };

// export default function reducer(state = initialState, action) {
//   console.log(action);

//   switch (action.type) {
//     case REQUEST_TODO_LIST_DATA: {
//       const { isLoading, isError } = action.payload;
//       return { ...state, isLoading: isLoading, isError: isError };
//     }
//     case RECEIVE_TODO_LIST_DATA_ERROR_FALSE: {
//       const { todoListData, isLoading, isError, errorMessage } = action.payload;
//       console.log(action.payload);

//       console.log(todoListData);
//       console.log(state);

//       return [...state, { todoListData: todoListData, isLoading: isLoading, isError: isError, errorMessage: errorMessage }];
//     }
//     case RECEIVE_TODO_LIST_DATA_ERROR_TRUE: {
//       const { todoListData, isLoading, isError, errorMessage } = action.payload;

//       return [...state, { todoListData: todoListData, isLoading: isLoading, isError: isError, errorMessage: errorMessage }];
//     }
//     default:
//       return state;
//   }
// }
