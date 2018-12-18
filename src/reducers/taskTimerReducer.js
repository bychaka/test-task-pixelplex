export const initialState = {
  timerStep: 500
};

export const taskTimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TIMER_STEP":
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
