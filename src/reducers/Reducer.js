const initialState = {
  isKeyPressed: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_KEY_PRESSED":
      return {
        ...state,
        isKeyPressed: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
