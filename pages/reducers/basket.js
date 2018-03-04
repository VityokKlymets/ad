import { ADD_ITEM } from "../types";
export default function basket(
  state = {
    items: []
  },
  action = {}
) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.id] };
    default:
      return state;
  }
}
