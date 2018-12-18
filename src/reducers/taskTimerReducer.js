export const initialState = {
  counter: 0,
  interval: parseInt(localStorage.getItem("interval"), 10) || 0
};

export const taskTimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TIMER_STEP":
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
