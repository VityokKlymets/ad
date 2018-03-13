import { ADD_ITEM, LOAD_ITEMS, ERASE_ITEM } from "../types";
export const add_item = id => ({
  type: ADD_ITEM,
  id
});
export const load_items = ids => ({
  type: LOAD_ITEMS,
  ids
});
export const item_erased = id => ({
  type: ERASE_ITEM,
  id
});
export const erase = id => dispatch => dispatch(item_erased(id));

export const addItem = id => dispatch => dispatch(add_item(id));
export const loadItems = ids => dispatch => dispatch(load_items(ids));
