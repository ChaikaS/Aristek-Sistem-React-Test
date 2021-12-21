import axios from "axios";
import { requestTodoListData, receiveTodoListDataErrorFalse, receiveTodoListDataErrorTrue } from "../actions/actionsApi.js";

// const api =
//   ({ dispatch }) =>
//   (next) =>
//   async (action) => {
//     if (action.type !== callBeganApi.type) return next(action);

//     const { url, method, data, onStart, onSuccess, onError } = action.payload;

//     if (onStart) dispatch({ type: onStart });

//     next(action);

//     try {
//       const response = await axios.request({
//         baseURL: "https://jsonplaceholder.typicode.com",
//         url,
//         method,
//         data,
//       });
//       dispatch(callSucessApi(response.data));
//       if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
//     } catch (error) {
//       dispatch(callFailedApi(error.message));
//       if (onError) dispatch({ type: onError, payload: error.message });
//     }
//   };

// export default api;

export const requestTodoList = (url) => async (dispatch) => {
  dispatch(requestTodoListData());
  try {
    const json = await axios.get(url);
    dispatch(receiveTodoListDataErrorFalse(json));
    console.log(json);
  } catch (e) {
    dispatch(receiveTodoListDataErrorTrue(e));
  }
};

// export const requestUsers = (url) => async (dispatch) => {
//    dispatch({
//      type: "REQUEST_USERS_DATA",
//    });
//    try {
//      const json = await axios.get(url);
//      dispatch({
//        type: "RECEIVE_USERS_DATA",
//        usersData: json.data,
//        isError: false,
//        errorMsg: "",
//      });
//    } catch (e) {
//      dispatch({
//        type: "RECEIVE_USERS_DATA",
//        usersData: [],
//        isError: true,
//        errorMsg: e,
//      });
//    }
//  };
