import { ADD_ITEM, LOAD_ITEMS } from "../types";
export default function basket(
  state = {
    items: []
  },
  action = {}
) {
  switch (action.type) {
    case ADD_ITEM:
      let items = [...state.items, action.id];
      window.localStorage.setItem("items", items);
      return { ...state, items };
    case LOAD_ITEMS:
      return { ...state, items: action.ids };
    default:
      return state;
  }
}
