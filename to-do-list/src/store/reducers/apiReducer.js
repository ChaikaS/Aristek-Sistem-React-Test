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
