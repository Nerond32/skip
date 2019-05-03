const initialState = {
  script: ""
};

function reducer(state = initialState, action) {
  if (action.type === "UPDATE_SCRIPT") {
    return {
      ...state,
      script: action.payload.script
    };
  }
  return state;
}

export default reducer;
