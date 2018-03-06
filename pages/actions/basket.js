import { ADD_ITEM, LOAD_ITEMS } from "../types";
export const add_item = id => ({
  type: ADD_ITEM,
  id
});
export const load_items = ids => ({
  type: LOAD_ITEMS,
  ids
});
export const addItem = id => dispatch => dispatch(add_item(id));
export const loadItems = ids => dispatch => dispatch(load_items(ids));
