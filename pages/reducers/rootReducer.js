import { combineReducers } from "redux";
import basket from "./basket";
import order from "./order";
export default combineReducers({
  basket,
  order
});
