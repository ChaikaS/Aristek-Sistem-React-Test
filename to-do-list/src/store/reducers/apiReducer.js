import { REQUEST_TODO_LIST_DATA, RECEIVE_TODO_LIST_DATA_ERROR_FALSE, RECEIVE_TODO_LIST_DATA_ERROR_TRUE } from "../actions/actionsApi.js";

const initialState = {
  todoListData: [123],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export default function reducer(state = initialState.todoListData, action) {
  console.log(action);

  switch (action.type) {
    case REQUEST_TODO_LIST_DATA: {
      return { ...state };
    }
    case RECEIVE_TODO_LIST_DATA_ERROR_FALSE:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: "",
      };
    case RECEIVE_TODO_LIST_DATA_ERROR_TRUE:
      return {
        ...state,
        todoListData: action.todoListData,
        isLoading: false,
        isError: action.isError,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}
