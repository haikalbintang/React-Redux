import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "./features/counters/counterSlice";
import carReducer from "./features/cars/carSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import accountReducer from "./features/account/accountSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  car: carReducer,
  account: accountReducer
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// store.dispatch({ type: "counter/increment", payload: 100 });
// store.dispatch({ type: "counter/decrement", payload: 200 });
// store.dispatch(increment(150)); // Which do you prefer?
console.log(store.getState());

export default store;
