import { ORDER_COMPLETE, ORDER_ITEMS_COMPLETE } from "../types";

export const order_complete = order => ({
  type: ORDER_COMPLETE,
  order
});
export const order_items_complete = items => ({
  type: ORDER_ITEMS_COMPLETE,
  items
});

export const orderComplete = order => dispatch =>
  dispatch(order_complete(order));
export const orderItems = items => dispatch =>
  dispatch(order_items_complete(items));
