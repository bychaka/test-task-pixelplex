export const initialState = {
  listItems: []
};

export const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST_ITEM":
      return Object.assign({}, state, action.payload);
    case "DELETE_LIST_ITEM":
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
