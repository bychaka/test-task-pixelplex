export const initialState = {
  listItems: []
};

export const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST_ITEM": {
      let newState = Object.assign({}, state);
      newState.listItems.push(action.payload);
      return Object.assign({}, newState);
    }
    case "DELETE_LIST_ITEM":
      //еще тут запилить
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
