import { UPDATE_INPUT_TEXT, NULL_UPDATE_INPUT_TEXT } from "../actions/actionsTodo.js";

const initialState = {
  inputForms: null,
};

export default function inputForm(state = initialState.inputForms, action) {
  switch (action.type) {
    case UPDATE_INPUT_TEXT: {
      return action.payload;
    }
    case NULL_UPDATE_INPUT_TEXT: {
      delete action.payload.property;
      return null;
    }
    default:
      return state;
  }
}
