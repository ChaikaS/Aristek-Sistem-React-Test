import { combineReducers } from "redux";
import inputForm from "../reducers/inputFormReducer.js";
import todoList from "../reducers/todoListReducer.js";
import completedList from "../reducers/completedListReducer";

const rootReducer = combineReducers({
  inputForm,
  todoList,
  completedList,
});
export default rootReducer;
