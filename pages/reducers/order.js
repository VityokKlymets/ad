import { ORDER_COMPLETE, ORDER_ITEMS_COMPLETE } from "../types";
export default function order(
  state = {
    items: [],
    name: "",
    phone: ""
  },
  action = {}
) {
  switch (action.type) {
    case ORDER_ITEMS_COMPLETE:
      return {
        ...state,
        items: action.items
      };
    case ORDER_COMPLETE:
      return action.order;
    default:
      return state;
  }
}
