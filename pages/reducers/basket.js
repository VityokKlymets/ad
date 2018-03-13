import { ADD_ITEM, LOAD_ITEMS, ERASE_ITEM } from "../types";
export default function basket(
  state = {
    items: []
  },
  action = {}
) {
  let items;
  switch (action.type) {
    case ADD_ITEM:
      items = [...state.items, action.id];
      window.localStorage.setItem("items", items);
      return { ...state, items };
    case LOAD_ITEMS:
      return { ...state, items: action.ids };
    case ERASE_ITEM:
      items = state.items.filter(item => item !== action.id);
      window.localStorage.setItem("items", items);
      return {
        ...state,
        items
      };
    default:
      return state;
  }
}
