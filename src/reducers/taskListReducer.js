export const initialState = {
  listItems: []
};

export const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_ADD_ITEM": {
      return Object.assign({}, state, {
        listItems: [...state.listItems, action.payload]
      });
    }
    case "ON_DELETE_ITEM":
      return Object.assign({}, state, {
        listItems: state.listItems.filter(item => item.id !== action.payload.id)
      });
    default:
      return state;
  }
};
