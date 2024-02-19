import { combineReducers } from "@reduxjs/toolkit";
import { CONTACT_ACTION } from "actions";

const contact = (state = "", action) => {
  switch (action.type) {
    case CONTACT_ACTION.SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contact,
});

export default rootReducer;
