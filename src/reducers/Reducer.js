const initialState = {
  isKeyPressed: false,
  isTimerPaused: false,
  isMatched: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_KEY_PRESSED":
      return {
        ...state,
        isKeyPressed: action.payload,
      };
    case "SET_TIMER_PAUSED": 
      return {
        ...state,
        isTimerPaused: action.payload,
      };

    case "SET_MATCHED": 
      return {
        ...state,
        isMatched: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
