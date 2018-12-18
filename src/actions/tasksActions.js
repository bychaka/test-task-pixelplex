export const addListItem = item => {
  return {
    type: "ADD_LIST_ITEM",
    payload: item
  };
};

export const deleteListItem = item => {
  return {
    type: "DELETE_LIST_ITEM",
    payload: item
  };
};

export const setTimerStep = step => {
  return {
    type: "SET_TIMER_STEP",
    payload: step
  };
};
