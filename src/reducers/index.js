import { combineReducers } from "redux";
import { taskListReducer } from "./taskListReducer";
import { taskTimerReducer } from "./taskTimerReducer";

export const rootReducer = combineReducers({
  list: taskListReducer,
  timer: taskTimerReducer
});
