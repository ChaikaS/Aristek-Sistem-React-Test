export const REQUEST_TODO_LIST_DATA = "REQUEST_TODO_LIST_DATA";
// export const RECEIVE_TODO_LIST_DATA_ERROR_FALSE = "RECEIVE_TODO_LIST_DATA_ERROR_FALSE";
// export const RECEIVE_TODO_LIST_DATA_ERROR_TRUE = "RECEIVE_TODO_LIST_DATA_ERROR_TRUE";

// // function callBeganApi(title, id) {
// //   return {
// //     type: REQUEST_USERS_DATA,
// //     payload: { title: title, completed: false, id: id, edit: false },
// //   };
// // }
// // function callSucessApi(title, id) {
// //   return {
// //     type: RECEIVE_USERS_DATA,
// //     payload: { title: title, completed: false, id: id, edit: false },
// //   };
// // }
// // function callFailedApi(title, id) {
// //   return {
// //     type: CALL_FAILED_API,
// //     payload: { title: title, completed: false, id: id, edit: false },
// //   };
// // }

// // export { callBeganApi, callSucessApi, callFailedApi };

function requestTodoList() {
  return {
    type: "REQUEST_TODO_LIST_DATA",
    payload: { isLoading: true, isError: false },
  };
}
// function receiveTodoListDataErrorFalse(json) {
//   return {
//     type: "RECEIVE_TODO_LIST_DATA_ERROR_FALSE",
//     payload: {
//       todoListData: json.data,
//       isLoading: false,
//       isError: false,
//       errorMessage: "",
//     },
//   };
// }
// function receiveTodoListDataErrorTrue(error) {
//   return {
//     type: "RECEIVE_TODO_LIST_DATA_ERROR_TRUE",
//     payload: {
//       todoListData: [],
//       isLoading: false,
//       isError: true,
//       errorMessage: error,
//     },
//   };
// }

export { requestTodoList };
