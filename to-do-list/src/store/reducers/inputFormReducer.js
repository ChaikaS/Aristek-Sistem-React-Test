import { UPDATE_INPUT_TEXT, NULL_UPDATE_INPUT_TEXT } from "../actions/actionsTodo.js";

const initialState = {
  inputForms: null,
};

export default function inputForm(state = initialState.inputForms, action) {
  console.log(action);
  console.log(action.type);
  console.log(UPDATE_INPUT_TEXT);
  console.log("000");

  switch (action.type) {
    case UPDATE_INPUT_TEXT: {
      console.log("123");

      const { text, id } = action.payload;
      return { text, id };

      // const newState = [...state];
      // newState.push(action.payload.item);
      // return newState;

      // return [...state.map((el) => (el.id.uuid === id ? { ...el, edit: !edit, text } : el))];
    }
    case NULL_UPDATE_INPUT_TEXT: {
      const { object } = action.payload;
      delete object.property;
      return null;
    }
    // case CURRENT_INPUT_TEXT: {
    //   console.log("edit");

    //   const { edit } = action.payload;
    //   return { edit };
    // }
    // case SAVE_UPDATE_INPUT_TEXT: {
    //   const { text, id } = action.payload;
    //   return { text, id };
    // }
    default:
      return state;
  }
}

// const { text, completed, id, edit } = action.payload;
//       return [...state, { text, completed, id, edit }];
