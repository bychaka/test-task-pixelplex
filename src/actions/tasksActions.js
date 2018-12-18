export const onAddItem = item => {
  return {
    type: "ON_ADD_ITEM",
    payload: item
  };
};

//onAddItem

export const onDeleteItem = item => {
  return {
    type: "ON_DELETE_ITEM",
    payload: item
  };
};

export const setTimerStep = step => {
  return {
    type: "SET_TIMER_STEP",
    payload: step
  };
};
