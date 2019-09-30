import { combineReducers } from "redux";
import bookReducer from "./components/Books/Books.reducer";
import cartReducer from "./components/Cart/Cart.reducer";
const rootReducer = combineReducers({
  bookReducer: bookReducer,
  cartReducer: cartReducer
});
export default rootReducer;
