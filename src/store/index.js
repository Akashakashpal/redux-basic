import { createStore } from "redux";

// 1. reducer Function ==> actions defined
// 2. Store
// 3. dispatch

const initialCount = { count: 0 };

const countReducer = (state = initialCount, action) => {
  if (action.type === "Getcount") {
    return { count: state.count + action.length };
  }
  if (action.type === "ResetCount") {
    return { count: 0 };
  }
  return state;
};

const store = createStore(countReducer);

export default store;
