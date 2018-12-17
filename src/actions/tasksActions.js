export const addListItem = items => {
  return {
    type: "ADD_LIST_ITEM",
    payload: items
  };
};

export const deleteListItem = items => {
  return {
    type: "DELETE_LIST_ITEM",
    payload: items
  };
};

export const setTimerStep = step => {
  return {
    type: "SET_TIMER_STEP",
    payload: step
  };
};
