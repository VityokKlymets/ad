import { ADD_ITEM } from "../types";
export const add_item = id => ({
  type: ADD_ITEM,
  id
});

export const addItem = id => dispatch => dispatch(add_item(id));
