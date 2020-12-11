import { combineReducers } from "redux";

import filterReducer from "./filters";
import pizzasReducer from "./pizzas";

const rootReducer = combineReducers({
  filterReducer,
  pizzasReducer
});

export default rootReducer;
