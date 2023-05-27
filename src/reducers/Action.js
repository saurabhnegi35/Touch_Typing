export const setKeyPressed = (isKeyPressed) => {
  return {
    type: "SET_KEY_PRESSED",
    payload: isKeyPressed,
  };
};

export const setTimerPaused = (isPaused) => {
  return {
    type: "SET_TIMER_PAUSED",
    payload: isPaused,
  };
};

export const setMatched = (isMatched) => {
  return {
    type: "SET_MATCHED",
    payload: isMatched,
  };
};
