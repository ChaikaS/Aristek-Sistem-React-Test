import { REQUEST_TODO_LIST_DATA } from "../actions/actionsApi";

export const initialState = {
  isLoading: true,
  isError: false,
};

export default function requestReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TODO_LIST_DATA: {
      const { isLoading, isError } = action.payload;
      return { ...state, isLoading: isLoading, isError: isError };
    }
    default:
      return state;
  }
}
