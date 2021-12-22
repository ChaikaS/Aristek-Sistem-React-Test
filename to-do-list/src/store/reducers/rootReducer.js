import { combineReducers } from "redux";
import inputForm from "../reducers/inputFormReducer.js";
import todoList from "../reducers/todoListReducer.js";
import completedList from "../reducers/completedListReducer";
import requestReducer from "../reducers/requestReducer";
// import todoListData from "../reducers/apiReducer.js";

// const { isLoading,isError } = requestReducer;

const rootReducer = combineReducers({
  inputForm,
  todoList,
  completedList,
  requestReducer,
});
export default rootReducer;
